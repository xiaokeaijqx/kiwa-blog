import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ImageUpload({ onUpload }: { onUpload: (file: File) => void }) {
    const [preview, setPreview] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            onUpload(file);
        }
    };

    return (
        <div className="flex flex-col items-center gap-2">
            {preview && <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded" />}
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="upload" />
            <label htmlFor="upload">
                <Button>选择图片</Button>
            </label>
        </div>
    );
}
