"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function PrecosPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const pricingOptions = [
    {
      sequences: 1,
      price: "25,00",
      chance: 16,
      label: "",
      color: "bg-red-500",
      link: "https://go.pepperpay.com.br/l2ogz",
    },
    {
      sequences: 5,
      price: "69,00",
      chance: 28,
      label: "Chance de acerto",
      color: "bg-red-500",
      link: "https://go.pepperpay.com.br/1exyo",
    },
    {
      sequences: 10,
      price: "87,00",
      chance: 52,
      label: "Chance de acerto",
      color: "bg-red-500",
      link: "https://go.pepperpay.com.br/a4ioo",
    },
    {
      sequences: 25,
      price: "137,00",
      chance: 71,
      label: "Chance de acerto ALTA",
      color: "bg-red-500",
      link: "https://go.pepperpay.com.br/ctxib",
    },
    {
      sequences: 50,
      price: "237,00",
      chance: 92,
      label: "Chance de acerto MUITO ALTA",
      color: "bg-red-500",
      link: "https://go.pepperpay.com.br/qaeo5",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 relative overflow-hidden flex flex-col">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/30 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-400/40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-white/30 rounded-full animate-pulse delay-500"></div>

        {/* Floating coins */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-yellow-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-yellow-500 rounded-full animate-bounce delay-500"></div>
      </div>

      {/* Main content wrapper - now flex-grow to push footer to bottom */}
      <div className="relative z-10 flex-grow px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* Promotion Badge */}
          <img
            src="/images/promo-1-milhao-carros.png"
            alt="Promoção 1 Milhão em Prêmios com Carros"
            className="w-80 md:w-96 h-auto mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Pricing Options */}
        <div className="max-w-md mx-auto space-y-4 mb-12">
          {pricingOptions.map((option, index) => (
            <div key={index}>
              {/* Pricing Button now a Link */}
              <Link
                href={option.link}
                target="_blank" // Abre em uma nova aba
                rel="noopener noreferrer" // Segurança para links externos
                className="w-full bg-red-500 text-white font-bold py-3 px-5 rounded-full text-base md:text-lg transition-all duration-200 ease-out
                           relative overflow-hidden
                           shadow-[0_6px_0_0_rgba(185,28,28,1)] hover:shadow-[0_3px_0_0_rgba(185,28,28,1)] active:shadow-[0_0px_0_0_rgba(185,28,28,1)]
                           transform hover:-translate-y-1 active:translate-y-0
                           ring-2 ring-yellow-400/30 hover:ring-yellow-400/60 hover:shadow-yellow-400/70 mb-4 flex justify-center items-center"
              >
                {option.sequences} Sequência{option.sequences > 1 ? "s" : ""} por R$ {option.price}
              </Link>
              {option.chance > 0 && (
                <div className="relative">
                  <div className="w-full bg-gray-800 rounded-full h-8 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 to-green-500 transition-all duration-1000 ease-out flex items-center justify-between px-3"
                      style={{ width: `${option.chance}%` }}
                    >
                      {/* Label no início da barra */}
                      {option.label && <span className="text-black font-bold text-xs truncate">{option.label}</span>}
                      {/* Porcentagem no final da barra */}
                      <span className="text-black font-bold text-sm">{option.chance}%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer - now outside the px-4 wrapper and full width */}
      <footer className="py-8 bg-black relative w-full">
        {/* Orange top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>

        <div className="max-w-4xl mx-auto text-center px-4">
          {" "}
          {/* Added px-4 here for inner content padding */}
          {/* Logo */}
          <div className="mb-6">
            <img
              src="/images/promo-1-milhao-carros-footer.png"
              alt="Promoção 1 Milhão em Prêmios com Carros"
              className="w-48 h-auto mx-auto mb-4"
            />
          </div>
          {/* Terms Title */}
          <h3 className="text-xl font-bold mb-4 text-white">TERMOS DO USUÁRIO</h3>
          {/* Contact Email */}
          <p className="text-gray-300 mb-6 text-sm">contato@numerosdasorte.com</p>
          {/* Security Badges */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_36_491699_1_170881495139784116-fnz88vPG5PvxOKOqVUzjdjs8Vxr0PY.png"
              alt="Navegação Segura Google"
              className="h-8 w-auto"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_38_491699_1_170881496151311455-3LDCrCbiomMcfnQS1nWnviGG7x0UoN.png"
              alt="Site Protegido SSL"
              className="h-8 w-auto"
            />
          </div>
          {/* Legal Text */}
          <div className="text-gray-400 text-xs space-y-1">
            <p>Não somos loteria, não realizamos sorteios e não vendemos</p>
            <p>Títulos de Capitalização.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
