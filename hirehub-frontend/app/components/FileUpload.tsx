import { Upload } from "lucide-react";

interface FileUploadProps {
    label: string;
}

export const FileUpload = ({label}: FileUploadProps) => {
return ( 
    <div className="space-y-3">
        <label className="text-xs font-black text-gray-400 uppercase tracking-wide ml-1">
            {label}
        </label>
        <div className="relative group">
            <input
            type='file'
            className="aboslute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            accept=".pdf, .doc, .docx"
            />
            <div className="border border-dashed border-gray-100 rounded-3xl p-10 flex flex-col items-center justify-center
                            group-hover:border-[#800020]/20 group-hover:bg-gray-50 transition-all duration-300">
                                <div className="p-4 bg-gray-500 rounded-2xl text-gray-400 group-hover:text-[#800020] group-hover:scale-110 transition-all duration-300">
                                    <Upload size={32}/>
                                </div>
                                <p className="nt-4 text-sm font-black text-black uppercase tracking-tight">
                                    Click to upload or drag and drop 
                                </p>
                                <p className="text-xs font-bold text-gray-400 uppercase mt-1">
                                    PDF, DOC, DOCX (Max. 5MB)
                                </p>
                            </div>
        </div>
    </div>
)
}