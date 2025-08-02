"use client"

import { useState, useEffect } from "react"

interface Testimonial {
  id: number
  name: string
  location: string
  text: string
  avatar: string
}

interface PrizeImage {
  id: number
  title: string
  image: string
}

export default function VibrantLotteryPromo() {
  const [currentDate, setCurrentDate] = useState("")
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Maria Freitas Neto",
      location: "São Paulo/SP",
      text: "Só tenho a agradecer as sequências que comprei nesse site. Pode confiar, só eu já comprei mais de 20 vezes",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_24_491699_1_170848062465d55870e3695766472614.jpg-8p3uOagvS5YPxR3jvZScTYeqI71Vio.jpeg",
    },
    {
      id: 2,
      name: "Luiz Teixeira",
      location: "Salvador/BA",
      text: "Finalmente pude levar minha família para conhecer a Disney através dessas sequências, além de estar pagando a faculdade de Medicina que minha filha sonhava tanto.",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_27_491699_1_16396.jpg-wv4yBcoilphdcndBp4KY63TIp7cjOg.jpeg",
    },
    {
      id: 3,
      name: "Francisca S. Duarte",
      location: "Porto Alegre/RS",
      text: "Isso é realmente fantástico. Só tenho a agradecer por tudo que fizeram por mim e minha família.",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_28_491699_1_42705.jpg-L4Ot4AdEWtWHuvzqhTSRDcyjysEiPU.jpeg",
    },
    {
      id: 4,
      name: "Osmar Santos Rench",
      location: "Rio de Janeiro/RJ",
      text: "Nunca imaginei que através de uma sequência da internet eu ganharia mais de meio milhão de reais. Compro toda semana!",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_29_491699_1_31429.jpg-wS2SHQqQg3WUp62sIEuB24sOr7vR23.jpeg",
    },
  ])

  const [prizeImages] = useState<PrizeImage[]>([
    {
      id: 1,
      title: "Toyota RAV4",
      image: "/placeholder.svg?height=200&width=300&text=Toyota+RAV4",
    },
    {
      id: 2,
      title: "CASA",
      image: "/placeholder.svg?height=200&width=300&text=Casa+dos+Sonhos",
    },
    {
      id: 3,
      title: "Ford ZR2",
      image: "/placeholder.svg?height=200&width=300&text=Ford+ZR2",
    },
    {
      id: 4,
      title: "Hilux SW4",
      image: "/placeholder.svg?height=200&width=300&text=Hilux+SW4",
    },
  ])

  useEffect(() => {
    const today = new Date()
    const formatted = today.toLocaleDateString("pt-BR")
    setCurrentDate(formatted)

    const updateCountdown = () => {
      const now = new Date()
      const target = new Date()
      target.setHours(22, 0, 0, 0)

      if (now > target) {
        target.setDate(target.getDate() + 1)
      }

      const diff = target.getTime() - now.getTime()
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft({ hours, minutes, seconds })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const faqItems = [
    {
      question: "QUEM PODE PARTICIPAR?",
      answer:
        "Qualquer pessoa física brasileira que aceite nossos Termos de Uso, exposto nesse site. Vendemos para todo o Brasil.",
    },
    {
      question: "QUE DIAS ACONTECEM OS SORTEIOS?",
      answer:
        "Os sorteios acontecem diariamente de segunda a sábado. É importante ficar atento nas datas de realização do sorteio e divulgação do resultado.",
    },
    {
      question: "COMO RECEBO A PREMIAÇÃO?",
      answer: "Os prêmios são pagos diretamente pelas lotéricas ou pelas agências dependendo do valor do prêmio.",
    },
    {
      question: "COMO AS SEQUÊNCIAS SÃO GERADAS?",
      answer:
        "As sequências são geradas de forma aleatória por inteligência artificial, o que pode aumentar as chances de ser sorteado.",
    },
    {
      question: "A SEQUÊNCIAS DA SORTE É AUTORIZADA PELA LOTERIA FEDERAL?",
      answer:
        "Não necessitamos ter autorização da Caixa Econômica Federal pois não somos loteria, não realizamos sorteios e não vendemos Títulos de Capitalização.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/30 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-400/40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-white/30 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Top Message */}
      <div className="relative z-10 text-center py-4 px-4">
        <p className="text-black text-xs max-w-4xl mx-auto tracking-[-0.02em] leading-[0.05rem] md:text-xs font-extralight">
          HOJE é sua chance de poder mudar de vida. Clique no botão abaixo para comprar seu e-book e receba de brinde as
          sequências sugeridas para a Quina geradas por IA e se torne o próximo milionário.
        </p>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-0">
        {/* Header Text */}
        <div className="text-center mb-1">
          <h1 className="text-4xl md:text-7xl font-black text-yellow-300 mb-2 transform -rotate-2 drop-shadow-2xl shadow-xl">
            VIBRANT LOTTERY PROMO
          </h1>
        </div>
        {/* Additional content can be added here */}
      </div>
    </div>
  )
}
