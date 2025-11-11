import { Link } from "react-router-dom";
import { ArrowRight, Recycle, TrendingUp, Users, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-machine.jpg";

const Index = () => {
  const features = [
    {
      icon: Recycle,
      title: "Reciclagem Inteligente",
      description: "Sistema automatizado que identifica e armazena garrafas PET e latas de alumínio.",
    },
    {
      icon: TrendingUp,
      title: "Impacto Positivo",
      description: "Acompanhe seus pontos e contribuição para um mundo mais sustentável.",
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Faça parte de uma rede de pessoas engajadas na preservação ambiental.",
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Contribua diretamente com as ODSs da ONU para um planeta melhor.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden gradient-hero">
          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-up">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Transforme Resíduos em{" "}
                  <span className="bg-clip-text text-transparent gradient-primary">
                    Impacto Positivo
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Nossa máquina inteligente torna a reciclagem fácil, rápida e recompensadora. 
                  Descarte garrafas PET e latas de alumínio e ajude a construir um futuro sustentável.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/maquina">
                    <Button size="lg" className="w-full sm:w-auto group">
                      Conheça a Máquina
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Começar Agora
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative animate-fade-in">
                <div className="absolute inset-0 gradient-secondary opacity-30 blur-3xl rounded-full animate-bounce-gentle"></div>
                <img 
                  src={heroImage} 
                  alt="Máquina de reciclagem Recycle"
                  className="relative rounded-2xl shadow-glow w-full hover-lift"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Por que usar a Recycle?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Descubra como nossa tecnologia está revolucionando a reciclagem e criando um futuro mais verde.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="border-2 hover:border-secondary transition-all duration-300 hover-lift gradient-card"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center shadow-subtle">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pronto para fazer a diferença?
              </h2>
              <p className="text-lg text-muted-foreground">
                Junte-se a milhares de pessoas que já estão contribuindo para um planeta mais sustentável.
              </p>
              <Link to="/auth">
                <Button size="lg" className="group gradient-secondary shadow-glow hover:shadow-strong">
                  Criar Conta Grátis
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
