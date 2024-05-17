import React from "react";
import { Link } from "react-router-dom";

export function WcIndex() {
    return (
        <div className="mt-12 mb-12 flex justify-center items-center gap-12">
            <Link to="/crear-pases-de-bano" className="w-48 h-48 bg-blue-500 text-white text-xl font-bold rounded-lg flex items-center justify-center shadow-lg hover:bg-blue-700">
                Crear Pases de Baño
            </Link>
            <Link to="/moderar-pases-de-bano" className="w-48 h-48 bg-green-500 text-white text-xl font-bold rounded-lg flex items-center justify-center shadow-lg hover:bg-green-700">
                Moderarlos
            </Link>
        </div>
    );
}

export default WcIndex;
