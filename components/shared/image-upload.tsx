import React, {ChangeEvent, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Upload} from "lucide-react";
// import {toast} from "sonner";

interface ImageUploaderProps {
    setImage: (file: File | null) => void;
    // setPreview: (url: string | null) => void;
    // preview: string | null;
}
export default function ImageUploader({ setImage}:ImageUploaderProps) {

    const [preview, setPreview] = useState<string | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        processFile(file);
    };

    const processFile = (file: File | undefined) => {
        if (!file) return;

        // 检查文件格式
        if (!["image/png", "image/jpeg"].includes(file.type)) {
            alert("仅支持 PNG 和 JPG 格式！");
            return;
        }

        // 限制文件大小 20MB
        if (file.size > 20 * 1024 * 1024) {
            alert("文件大小不能超过 20MB！");
            return;
        }
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };


    const handleDrop = (event:React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);

        const file = event.dataTransfer.files[0];
        processFile(file);
    };

    // 拖拽中设置状态 拖拽中
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    // 拖拽离开设置状态 未拖拽
    const handleDragLeave = () => {
        setIsDragging(false);
    };
    // const handleUpload = async () => {
    //     if (!image) {
    //         alert("请先选择图片！");
    //         return;
    //     }

    //     const formData = new FormData();
    //     formData.append("file", image);
    //
    //     try {
    //         const response = await fetch("/api/upload", {
    //             method: "POST",
    //             body: formData,
    //         });
    //
    //         if (!response.ok) throw new Error("上传失败");
    //         alert("上传成功！");
    //     } catch (error) {
    //         alert(error.message);
    //     }
    // };

    return (
        <Card className="p-6 w-full mx-auto ">
            {/*隐藏的文件上传按钮*/}
            <Input
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
                className="hidden"
                ref={fileInputRef}
            />
            <CardContent className="flex justify-center p-0 ">
                <div
                    className={`border-2 ${
                        isDragging ? "border-blue-500" : "border-gray-300"
                    } border-dashed rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer`}
                    // 监控拖拽事件，触发设置状态
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    // 拖拽松开事件，触发上传图片
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                >
                    {preview ? (

                        <img src={preview} alt="预览" className="w-full h-[80px] object-cover rounded-lg"/>
                    ) : (

                        <div
                            className="w-full h-[80px]  text-gray-500  rounded-lg text-center leading-[80px]">拖动图片到这里或点击上传</div>

                    )}
                    </div>
            </CardContent>


            <Button onClick={() => fileInputRef.current?.click()} className="w-full bg-indigo-500 text-white">
                <Upload className="mr-2"/> 选择图片
            </Button>

            {/*<Button onClick={handleUpload} className="w-full">*/}
            {/*    <Upload className="mr-2" /> 上传图片*/}
            {/*</Button>*/}
        </Card>
);
}
