//imageGetter.tsx

import React, { useState, useRef, useEffect } from "react";
import './imageGetter.scss';

import { Text } from "@components/base";

import { useDispatch } from 'react-redux';
import { addPolygon } from "@store/polygonsSlice"; //для добавления полигонов


export const ImageGetter: React.FC = () => {
    const [opened, setOpened] = useState(false);
    const [files, setFiles] = useState<FileList | null>(null);
    const [error, setError] = useState<string | null>(null);
    const ref = useRef<HTMLDivElement | null>(null);


    const dispatch = useDispatch();//для добавления полигонов


    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
        if (
            ref.current &&
            !ref.current.contains(e.target as Node)
        ) {
            setOpened(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () =>
            document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    const isGeoTiff = (file: File) => {
        const name = file.name.toLowerCase();
        return name.endsWith('.tif') || name.endsWith('.tiff');
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        setError(null);

        if (!selectedFiles || selectedFiles.length !== 2) {
            setError("Пожалуйста, выберите ровно два файла.");
            setFiles(null);
            return;
        }

        const invalidFiles = Array.from(selectedFiles).filter(file => !isGeoTiff(file));
        if (invalidFiles.length > 0) {
            setError("Все файлы должны быть в формате GeoTIFF (.tif, .tiff).");
            setFiles(null);
            return;
        }

        setFiles(selectedFiles);
        setOpened(false);

        // Отправляем файлы на backend
        try {
            const formData = new FormData();
            formData.append("file1", selectedFiles[0]);
            formData.append("file2", selectedFiles[1]);

            const response = await fetch("http://127.0.0.1:5000/get_polygons/", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Ошибка при отправке запроса.");
            }

            const polygons = await response.json();
            alert("Распознаны полигоны:\n" + JSON.stringify(polygons, null, 2));
            console.log("Распознаны полигоны:\n" + JSON.stringify(polygons, null, 2));
            // @ts-ignore
            polygons.forEach(element => {
                console.log(element)
                // console.log(element.points)
                const newPolygon = {
                    id: String(Date.now()), // Явное указание ID
                    points: element.points,
                    name: `Новый полигон ${Date.now().toString().slice(-4)}`,
                    tree_count: 1
                  };
                dispatch(addPolygon(newPolygon)); 
                // добавляем новые полигоны
            });
            
        } catch (err: any) {
            setError(err.message || "Неизвестная ошибка.");
        }
    };

    return (
        <div className="file-upload-block" id="file-upload-trigger">
            <button
                className="upload-button"
                onClick={() => setOpened(!opened)}
            >
                Распознать полигоны
            </button>

            {opened &&
                <div
                    className="file-upload-dropdown box-shadow-bottom"
                    ref={ref}
                >
                    <Text color='gray' type='small-text'>
                        Выберите ровно два файла GeoTIFF (.tif / .tiff)
                    </Text>
                    <input
                        type="file"
                        accept=".tif,.tiff,image/tiff"
                        multiple
                        onChange={handleFileChange}
                        className="file-input"
                    />

                    {error && (
                        <Text color='error' type='small-text'>
                            {error}
                        </Text>
                    )}

                    {files && (
                        <div className="selected-files">
                            {[...files].map((file, index) => (
                                <Text key={index} color="base" type="small-text">
                                    {file.name}
                                </Text>
                            ))}
                        </div>
                    )}
                </div>
            }
        </div>
    );
};
