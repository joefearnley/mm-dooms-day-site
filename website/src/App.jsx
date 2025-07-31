import { useState } from 'react'
import plasmaMan from './assets/plasma_man.jpg'
import nasaMan from './assets/nasa_man.png'
import subZero from './assets/sub_zero.jpg'
import militaryMan from './assets/military_man.jpg'
import wilyRigCastle from './assets/wily_rig_castle.png'
import genertorMan from './assets/genertor_man.jpg'
import waterfallMan from './assets/waterfall_man.jpg'
import fossilMan from './assets/fossil_man.jpg'
import propaneMan from './assets/propane_man.jpg'

import './App.css'

function App() {

    return (
        <>
            <div className="container mx-auto">
                <div className="mx-auto text-center py-24">
                    <h1 className="text-6xl font-bold">Mega Man Dooms Day</h1>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-6">
                    <div>
                        <a href="#" className="">
                            <img src={plasmaMan} className="max-h-48  mx-auto boss-image" alt="Plasma Man" />
                        </a>
                        <h3 className="text-2xl font-bold text-center mt-4">
                            <a href="#">Plasma Man</a>
                        </h3>
                    </div>
                    <div>
                        <a href="#" className="">
                            <img src={nasaMan} className="max-h-48  mx-auto boss-image" alt="Nasa Man" />
                        </a>
                        <h3 className="text-2xl font-bold text-center mt-4">
                            <a href="#">Nasa Man</a>
                        </h3>
                    </div>
                    <div>
                        <a href="#" className="">
                            <img src={subZero} className="max-h-48  mx-auto boss-image" alt="Sub Zero" />
                        </a>
                        <h3 className="text-2xl font-bold text-center mt-4">
                            <a href="#">Sub Zero</a>
                        </h3>
                    </div>
                    <div>
                        <a href="#" className="">
                            <img src={militaryMan} className="max-h-48  mx-auto boss-image " alt="Military Man" />
                        </a>
                        <h3 className="text-2xl font-bold text-center mt-4">
                            <a href="#">Military Man</a>
                        </h3>
                    </div>
                    <div>
                        <a href="#" className="">
                            <img src={wilyRigCastle} className="max-h-48  mx-auto boss-image" alt="Wily Rig Castle" />
                        </a>
                        <h3 className="text-2xl font-bold text-center mt-4">
                            <a href="#">Wily Rig Castle</a>
                        </h3>
                    </div>
                    <div>
                        <a href="#" className="">
                            <img src={genertorMan} className="max-h-48  mx-auto boss-image" alt="Genertor Man" />
                        </a>
                        <h3 className="text-2xl font-bold text-center mt-4">
                            <a href="#">Genertor Man</a>
                        </h3>
                    </div>
                    <div>
                        <a href="#" className="">
                            <img src={waterfallMan} className="max-h-48  mx-auto boss-image" alt="Waterfall Man" />
                        </a>
                        <h3 className="text-2xl font-bold text-center mt-4">
                            <a href="#">Waterfall Man</a>
                        </h3>
                    </div>
                    <div>
                        <a href="#" className="">
                            <img src={fossilMan} className="max-h-48  mx-auto boss-image" alt="Fossil Man" />
                        </a>
                        <h3 className="text-2xl font-bold text-center mt-4">
                            <a href="#">Fossil Man</a>
                        </h3>
                    </div>
                    <div>
                        <a href="#" className="">
                            <img src={propaneMan} className="max-h-48 mx-auto boss-image" alt="Propane Man" />
                        </a>
                        <h3 className="text-2xl font-bold text-center mt-4">
                            <a href="#">Propane Man</a>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
