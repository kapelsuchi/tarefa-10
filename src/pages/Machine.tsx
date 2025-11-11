import { Zap, Shield, BarChart3, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import machineImage from "@/assets/machine-detail.jpg";

const Machine = () => {
  const specs = [
    {
      icon: Zap,
      title: "Processamento Rápido",
      description: "Identificação e armazenamento em menos de 3 segundos por item.",
    },
    {
      icon: Shield,
      title: "Sistema Seguro",
      description: "Tecnologia de ponta que garante armazenamento adequado e higiênico.",
    },
    {
      icon: BarChart3,
      title: "Rastreamento em Tempo Real",
      description: "Acompanhe sua contribuição e impacto ambiental instantaneamente.",
    },
    {
      icon: Smartphone,
      title: "Integração Digital",
      description: "Conecte-se via app e acumule pontos a cada descarte realizado.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Insira o Material",
      description: "Coloque garrafas PET ou latas de alumínio na abertura da máquina.",
    },
    {
      step: "2",
      title: "Identificação Automática",
      description: "Sensores inteligentes identificam e validam o material inserido.",
    },
    {
      step: "3",
      title: "Armazenamento Seguro",
      description: "O item é compactado e armazenado de forma eficiente e higiênica.",
    },
    {
      step: "4",
      title: "Receba Pontos",
      description: "Ganhe pontos instantaneamente que podem ser trocados por benefícios.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold">
                A Máquina Recycle
              </h1>
              <p className="text-lg text-muted-foreground">
                Tecnologia de ponta que torna a reciclagem simples, rápida e recompensadora. 
                Conheça como funciona nossa solução inovadora.
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src={machineImage} 
                alt="Detalhes da máquina Recycle"
                className="rounded-2xl shadow-glow w-full hover-lift"
              />
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Especificações Técnicas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Desenvolvida com o que há de mais moderno em tecnologia de reciclagem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specs.map((spec, index) => (
                <Card 
                  key={index} 
                  className="border-2 hover:border-secondary transition-all duration-300 hover-lift gradient-card"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shadow-subtle">
                      <spec.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{spec.title}</h3>
                    <p className="text-muted-foreground">{spec.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Como Funciona
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Em apenas 4 passos simples, você contribui para um planeta mais sustentável
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {howItWorks.map((item, index) => (
                <div key={index} className="relative">
                  <Card className="h-full border-2 hover:border-secondary transition-all duration-300 hover-lift gradient-card">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-16 h-16 rounded-full gradient-secondary text-white shadow-subtle flex items-center justify-center text-2xl font-bold">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-secondary border-b-8 border-b-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials Accepted */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Materiais Aceitos
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-2xl font-bold text-primary">Garrafas PET</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Garrafas de água</li>
                      <li>• Garrafas de refrigerante</li>
                      <li>• Embalagens de sucos</li>
                      <li>• Recipientes PET limpos</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-2">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-2xl font-bold text-primary">Latas de Alumínio</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Latas de refrigerante</li>
                      <li>• Latas de cerveja</li>
                      <li>• Latas de energético</li>
                      <li>• Outras bebidas em lata</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Machine;
