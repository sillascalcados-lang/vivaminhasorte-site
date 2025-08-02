"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

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

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-2">
        {/* Header Text */}
        <div className="text-center mb-1">
          <h1 className="text-4xl md:text-7xl font-black text-yellow-300 mb-2 transform -rotate-2 drop-shadow-2xl shadow-xl">
            SUA VIDA NOVA
          </h1>
          <h2 className="text-3xl md:text-6xl font-black text-yellow-300 transform rotate-1 drop-shadow-2xl shadow-2xl">
            COMEÇA AGORA !!!
          </h2>
        </div>

        {/* Promotion Badge */}
        <div className="relative mb-1">
          <div className="transform hover:scale-105 transition-transform">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2r4l61hm0TIUQSvdkzLuuxps64z7Up.png"
              alt="Promoção 1 Milhão em Prêmios"
              className="w-80 md:w-96 h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Date and Time Info */}
        <div className="text-center mb-1">
          <div className="bg-black/80 rounded-2xl p-4 mb-3 backdrop-blur-sm">
            <h3 className="text-3xl md:text-5xl font-black text-yellow-300 mb-1">É Hoje!</h3>
            <p className="text-xl md:text-2xl font-bold text-white mb-1">{currentDate}</p>
            <p className="text-lg md:text-xl font-bold text-yellow-300">Ao Vivo na BAND às 22:00</p>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-3 mb-2">
            <div className="bg-white/90 rounded-lg p-2 text-center min-w-[50px]">
              <div className="text-xl font-black text-red-600">{timeLeft.hours.toString().padStart(2, "0")}</div>
              <div className="text-xs font-bold text-gray-600">HORAS</div>
            </div>
            <div className="bg-white/90 rounded-lg p-2 text-center min-w-[50px]">
              <div className="text-xl font-black text-red-600">{timeLeft.minutes.toString().padStart(2, "0")}</div>
              <div className="text-xs font-bold text-gray-600">MIN</div>
            </div>
            <div className="bg-white/90 rounded-lg p-2 text-center min-w-[50px]">
              <div className="text-xl font-black text-red-600">{timeLeft.seconds.toString().padStart(2, "0")}</div>
              <div className="text-xs font-bold text-gray-600">SEG</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-2">
          <Link href="/precos" scroll={true}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_3_491699_1_170848463281043454-GXud4pEQckQ2NORe2YImurgdRLKA8E.png"
              alt="Quero minhas sequências!"
              className="w-72 md:w-80 h-auto drop-shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </Link>
        </div>

        {/* Bottom disclaimer */}
        <div className="text-center">
          <p className="text-black max-w-md mx-auto text-xs font-extralight">
            * Valores meramente ilustrativos, a depender do sorteio da Caixa Econômica Federal
          </p>
        </div>
      </div>

      {/* Prize Showcase Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_6_491699_1_170848500239856495-1QNl7d2oJQQF80Vw8bI96AOpuihzCQ.png"
              alt="Sua vida nova começa agora"
              className="mx-auto h-16 md:h-20 w-auto drop-shadow-2xl"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prizeImages.map((prize) => (
              <div className="text-center" key={prize.id}>
                {prize.id === 1 ? (
                  // Toyota RAV4 carousel
                  <div className="relative">
                    <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                      <div className="flex animate-slide">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_20_491699_1_340147415385.jpg-GwkEkYx7V2FlbtN0OooGmbYKMjh2YM.jpeg"
                          alt="Toyota RAV4 - Interior"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_17_491699_1_340147236179.jpg-PesNPjDk89OaUrUZFYprV0d9YA5Q8x.jpeg"
                          alt="Toyota RAV4 - Farol"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_18_491699_1_340144583015.jpg-R2HJmDAtxc9q00HYWkUWCGMuhDMJAC.jpeg"
                          alt="Toyota RAV4 - Bancos"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_19_491699_1_340145319946.jpg-K8cfYuOcEKImLvKkWs4WtMfTcBzfbl.jpeg"
                          alt="Toyota RAV4 - Lateral"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_16_491699_1_340148391402.jpg-YUeHxrXg3DyXL2pQwih135vXGMLEeZ.jpeg"
                          alt="Toyota RAV4 - Frontal"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                      </div>
                    </div>
                  </div>
                ) : prize.id === 2 ? (
                  // Casa carousel
                  <div className="relative">
                    <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                      <div className="flex animate-slide">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_7_491699_1_972714413876.jpg-4JonZJUZFZWOchGiiy1fBmvXTPisgH.jpeg"
                          alt="Casa - Fachada"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_9_491699_1_972719832902.jpg-TVz06rYjJo8FXSWhZqrkdIlXeHmxgK.jpeg"
                          alt="Casa - Cozinha"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_8_491699_1_972716552169.jpg-OuUicqHdbhB9b8suBLeg4wyYwXUq90.jpeg"
                          alt="Casa - Sala"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_10_491699_1_972716430366.jpg-64xK5NT3wO5oMIxnOXEmnUBhvFQ2rp.jpeg"
                          alt="Casa - Área Externa"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                      </div>
                    </div>
                  </div>
                ) : prize.id === 3 ? (
                  // Ford ZR2 carousel
                  <div className="relative">
                    <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                      <div className="flex animate-slide">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_12_491699_1_102531920845.jpg-XX2LWbaXKY2DLTIHIKT0tpKG7rkh4W.jpeg"
                          alt="Ford ZR2 - Interior"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_11_491699_1_102537355900.jpg-30IUnPanzWVr9omEmKUoPnUiSFStK6.jpeg"
                          alt="Ford ZR2 - Off-road"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_13_491699_1_102534895261.jpg-sEWYU48Sn5dlFjl3FamIz0IRAzKkMd.jpeg"
                          alt="Ford ZR2 - Atravessando água"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_14_491699_1_102537809984.jpg-rfroDhSd5TIoe23YmunkuTMJEuN6D1.jpeg"
                          alt="Ford ZR2 - Farol frontal"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_15_491699_1_10253822304.jpg-JvZIUfYMD62ivsfB4LYEkAbOobyDWx.jpeg"
                          alt="Ford ZR2 - Vista lateral"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  // Hilux SW4 carousel
                  <div className="relative">
                    <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                      <div className="flex animate-slide">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_23_491699_1_311475637479.jpg-wpV9HDcA1INzspnRlqzPpzbPEv0FyY.jpeg"
                          alt="Hilux SW4 - Vista frontal"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_21_491699_1_311474165282.jpg-Ma62LES04WCEbyLumCIvy9B6Mth0G9.jpeg"
                          alt="Hilux SW4 - Detalhes frontais"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_24_491699_1_311475949293.jpg-0HGesdzwMXodsY2QhDI47sDrQ9DVRX.jpeg"
                          alt="Hilux SW4 - Interior painel"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_22_491699_1_31147145711.jpg-M1SC6mh6x38brQsDtI4eeXtCXi5dpK.jpeg"
                          alt="Hilux SW4 - Volante"
                          className="w-full h-48 object-cover flex-shrink-0"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-bold text-white">{prize.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/precos" scroll={true}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_3_491699_1_170848463281043454-GXud4pEQckQ2NORe2YImurgdRLKA8E.png"
                alt="Quero minhas sequências!"
                className="mx-auto w-72 md:w-80 h-auto drop-shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer mb-4"
              />
            </Link>
            <p className="text-gray-300 text-xs max-w-2xl mx-auto font-thin">
              Imagens meramente ilustrativas. Representam possíveis bens de consumo que poderiam ser adquiridos com o
              valor sorteado na Quina.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 pb-4 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">
            DEPOIMENTOS DE GANHADORES
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white/95 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-800 mb-6 italic text-center">"{testimonial.text}"</p>

                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="rounded-full object-cover mb-4 border-0 h-52 w-52"
                    />
                    <div className="text-center">
                      <p className="font-bold text-gray-800">Nome: {testimonial.name}</p>
                      <p className="text-gray-600">Cidade/UF: {testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Testimonials Promotional Section */}
      <section className="py-0 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-1">
          {/* Promotion Badge */}
          <div className="transform hover:scale-105 transition-transform">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ND23K2Y0Y2Hrk9KFBuCJBWRZPjzQ30.png"
              alt="Promoção 1 Milhão em Prêmios"
              className="w-80 md:w-96 h-auto mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Price */}
          <div className="bg-yellow-400 text-black px-8 py-3 rounded-lg inline-block mb-4">
            <p className="text-2xl md:text-3xl font-bold">Por apenas R$ 25,00</p>
          </div>

          {/* CTA Button */}
          <div>
            <Link href="/precos" scroll={true}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_3_491699_1_170848463281043454-QDEaTCa39U7SUYt5Ewp1lUddy516I9.png"
                alt="Quero minhas sequências!"
                className="w-72 md:w-80 h-auto mx-auto drop-shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">DÚVIDAS FREQUENTES</h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/95 backdrop-blur-sm rounded-lg border-white/20"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-gray-800 hover:text-blue-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black relative">
        {/* Orange top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JDB9Pn8fgBzJ0ZkWOsK3So8SLxPMmh.png"
              alt="Promoção 1 Milhão em Prêmios"
              className="w-32 md:w-40 h-auto mx-auto"
            />
          </div>

          {/* Terms Title */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">TERMOS DO USUÁRIO</h3>

          {/* Contact Email */}
          <p className="text-gray-300 mb-6 text-sm md:text-base">contato@sequenciasdasorte.com</p>

          {/* Security Badges */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_36_491699_1_170881495139784116-fnz88vPG5PvxOKOqVUzjdjs8Vxr0PY.png"
              alt="Navegação Segura Google"
              className="h-10 w-auto"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_38_491699_1_170881496151311455-3LDCrCbiomMcfnQS1nWnviGG7x0UoN.png"
              alt="Site Protegido SSL"
              className="h-10 w-auto"
            />
          </div>

          {/* Legal Text */}
          <div className="text-gray-400 text-xs md:text-sm space-y-2">
            <p>* Valores meramente ilustrativos, a depender do sorteio da Quina, Caixa Econômica Federal</p>
            <p>Não somos loteria, não realizamos sorteios e não vendemos Títulos de Capitalização.</p>
            <p className="font-semibold">56.302.747/0001-59 - Todos os Direitos Reservados</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slide {
          0%, 25% { transform: translateX(0%); }
          30%, 55% { transform: translateX(-100%); }
          60%, 85% { transform: translateX(-200%); }
          90%, 100% { transform: translateX(-300%); }
        }
        .animate-slide {
          animation: slide 8s infinite;
        }
      `}</style>
    </div>
  )
}
