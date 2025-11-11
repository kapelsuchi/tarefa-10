import { Target, Heart, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Nossa Missão",
      description: "Facilitar a reciclagem através da tecnologia, tornando o descarte correto acessível e recompensador para todos.",
    },
    {
      icon: Heart,
      title: "Nossos Valores",
      description: "Sustentabilidade, inovação e responsabilidade social são os pilares que guiam cada decisão que tomamos.",
    },
    {
      icon: Lightbulb,
      title: "Nossa Visão",
      description: "Criar um mundo onde a reciclagem seja parte natural do dia a dia, contribuindo para um planeta mais limpo.",
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
                Sobre a Recycle
              </h1>
              <p className="text-lg text-muted-foreground">
                Somos uma startup comprometida em revolucionar a forma como as pessoas encaram a reciclagem, 
                combinando tecnologia de ponta com consciência ambiental.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-2 hover:border-secondary transition-all duration-300 hover-lift gradient-card">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full gradient-secondary shadow-subtle flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">Nossa História</h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  A Recycle nasceu da observação de um problema crítico: milhões de garrafas PET e latas 
                  de alumínio são descartadas incorretamente todos os dias, causando impactos devastadores 
                  ao meio ambiente.
                </p>
                
                <p>
                  Nossa equipe de engenheiros e ambientalistas se uniu com um objetivo claro: criar uma 
                  solução tecnológica que tornasse a reciclagem mais acessível, conveniente e recompensadora. 
                  Assim nasceu nossa máquina inteligente de coleta.
                </p>
                
                <p>
                  Hoje, estamos presentes em diversos pontos estratégicos, facilitando o descarte correto 
                  de materiais recicláveis e educando a população sobre a importância da sustentabilidade. 
                  Cada garrafa ou lata depositada é um passo em direção a um futuro mais verde.
                </p>
                
                <p>
                  Nosso compromisso vai além da tecnologia. Trabalhamos ativamente para contribuir com as 
                  Metas de Desenvolvimento Sustentável da ONU, especialmente aquelas relacionadas à indústria, 
                  inovação, cidades sustentáveis e vida terrestre.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Nosso Impacto</h2>
              <p className="text-lg text-muted-foreground">Números que mostram nossa contribuição</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-2 p-6 rounded-2xl gradient-card hover-lift">
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent gradient-primary">50K+</div>
                <div className="text-muted-foreground font-medium">Itens Reciclados</div>
              </div>
              <div className="text-center space-y-2 p-6 rounded-2xl gradient-card hover-lift">
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent gradient-secondary">1000+</div>
                <div className="text-muted-foreground font-medium">Usuários Ativos</div>
              </div>
              <div className="text-center space-y-2 p-6 rounded-2xl gradient-card hover-lift">
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent gradient-accent">15</div>
                <div className="text-muted-foreground font-medium">Pontos de Coleta</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
