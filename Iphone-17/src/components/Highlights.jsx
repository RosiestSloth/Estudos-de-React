function Highlights() {

    const specs = [
        { value: '48MP', label: 'Câmera Principal', color: 'text-blue-600', text: 'Sensor quad-pixel com foto automático' },
        { value: '12MP', label: 'Ultra Wide', color: 'text-orange-500', text: 'Campo de visão de 120° com modo noturno' },
        { value: '12MP', label: 'Telefoto', color: 'text-blue-600', text: 'Zoom óptico de 5x com estabilização' },
    ]

    return (
        <section className="max-w-7xl mx-auto bg-black py-20 px-6" id="design">
            <div className="mx-auto">
                <div className="text-center mb-16 ">
                    <h2 className="text-5xl font-bold mb-4">Design Revolucionário</h2>
                    <p className="text-xl text-gray-400">Cada detalhe foi pensado para criar a melhor experiência.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 mb-16 gap-4">
                <div className="bg-gray-900 rounded-3xl p-8">
                    <img className="w-full rounded-2xl mb-4" src="img/titanium-design.jpg" alt="Design em titânio" />
                    <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
                    <p className="text-gray-300">Estrutura em titânio de grau aeroespacial. O smartphone mais forte e leve.</p>
                </div>

                <div className="bg-gray-900 rounded-3xl p-8">
                    <img className="w-full rounded-2xl mb-4" src="img/ios-features.jpg" alt="Ios 2025" />
                    <h3 className="font-bold mb-2 text-3xl">iOS 26</h3>
                    <p>O sistema operacional mais avançado do mundo com IA integrada.</p>
                </div>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 mb-16" id="performance">
                <h3 className="font-bold mb-6 text-4xl text-gradient">A18 Pro</h3>
                <p className="text-gray-300">O chip mais poderoso em um smartphone.</p>
                <img className="w-full rounded-2xl my-4" src="img/chip-a18-pro.jpg" alt="" />

                <ul className="space-y-3 text-gray-300 list-disc list-inside">
                    <li>CPU 20% mais rápida</li>
                    <li>GPU 26% mais eficiente</li>
                    <li>Neutral Engine com 16 núcleos</li>
                    <li>Ray tracing acelerado por hardware</li>
                </ul>
            </div>
            <div className="text-center">
                <h3 className="text-4xl font-bold mb-10">Sistema de câmera Pro avançado</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6" id="camera">
                    {specs.map((spec, index) => (
                        <div key={index} className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition duration-300 hover:scale-105 cursor-pointer">
                            <h3 className={`text-4xl font-bold mb-4 ${spec.color}`}>{spec.value}</h3>
                            <h4 className="font-semibold text-xl mb-2">{spec.label}</h4>
                            <p className="text-gray-400">{spec.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Highlights