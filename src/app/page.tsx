import React from 'react';
import Image from 'next/image'
import Tiktok from "@/app/components/Tiktok";

function Page() {
    return (
        <div className="w-full h-screen flex flex-col justify-start items-center p-2">
            <div className="flex max-w-sm justify-center items-center -mb-8">
                <Tiktok className="size-36"/>
            </div>
            <div className="text-center max-w-sm leading-relaxed text-sm">
                Redistribución en vivo.
                <br/>
                Comenta tu CLABE para participar en la dinámica.
                <br/>
                Estamos por tiempo limitado. Apúrate.
                <p className="font-semibold text-lg my-8">Saludos y bendiciones para todos.</p>
            </div>
            <a href="https://t.me/+6bzV68PpHeE0MDZh" target="_blank" className="text-sm font-semibold p-2 bg-blue-400 rounded-xl mb-8 hover:bg-blue-700 transition-all duration-200">Entra a nuestro canal de Telegram</a>
            <div className="text-center max-w-sm text-sm">
                Recuerda que cerramos dinámica a las
            </div>
            <div className="text-center max-w-sm text-3xl font-bold blinking-text">
                12:00 a.m.
            </div>
            <div className="grid grid-cols-2 max-w-sm gap-4 mt-12 mb-6">
                <div className="border-gray-500 border-2 flex aspect-square flex-col items-center justify-center active:bg-[#232323] rounded-lg p-8">
                    <img src="rose.png" alt="" className="size-24"/>
                    <p className="font-semibold text-2xl">20.00</p>
                    <p className="blinking-text text-nowrap font-semibold">¡Cupos limitados!</p>
                </div>
                <div className="border-gray-500 border-2 active:bg-[#232323] rounded-lg p-8 flex aspect-square flex-col items-center justify-center">
                    <img src="donut.png" alt="" className="size-24"/>
                    <p className="font-semibold text-2xl">1,000.00</p>
                    <p className="blinking-text text-nowrap font-semibold">¡Cupos limitados!</p>
                </div>
            </div>
            <div className="grid grid-cols-2 max-w-sm gap-4 mt-2 mb-6">
                <div className="galaxy-border-glow border-blue-400 border-3 col-span-2 flex w-full flex-col items-center justify-center active:bg-[#232323] rounded-lg p-8">
                    <img src="galaxy.png" alt="" className="size-24"/>
                    <p className="font-semibold text-2xl">15,000.00</p>
                    <p className="blinking-text text-nowrap font-bold text-lg">¡Cupos limitados!</p>
                </div>
            </div>
            <div className="my-12 max-w-sm">
                <p className="text-center text-sm text-gray-500">
                    Solo la DONUT, y GALAXY, aseguran saludos automáticos e instantános en vivo.
                    <br/>
                    <br/>
                    Todas las donaciones se re-invierten en el crecimiento de nuestra comiunidad.
                    <br/>
                    <span className="font-semibold">
                        Saludos y bendiciones para todos.
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Page;