import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Factory, Building2, Recycle as RecycleIcon, Flame, Waves, Trees } from "lucide-react";

const SDGs = () => {
  const sdgs = [
    {
      number: 9,
      title: "Indústria, Inovação e Infraestrutura",
      icon: Factory,
      color: "bg-orange-500",
      description: "Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação.",
      ourContribution: "Nossa máquina representa inovação tecnológica aplicada à sustentabilidade, criando infraestrutura para coleta eficiente de recicláveis.",
    },
    {
      number: 11,
      title: "Cidades e Comunidades Sustentáveis",
      icon: Building2,
      color: "bg-amber-500",
      description: "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.",
      ourContribution: "Instalamos pontos de coleta estratégicos nas cidades, facilitando o acesso à reciclagem e promovendo comunidades mais limpas.",
    },
    {
      number: 12,
      title: "Consumo e Produção Responsáveis",
      icon: RecycleIcon,
      color: "bg-yellow-600",
      description: "Assegurar padrões de produção e de consumo sustentáveis.",
      ourContribution: "Incentivamos o descarte consciente e a economia circular, transformando resíduos em recursos valiosos.",
    },
    {
      number: 13,
      title: "Ação Contra a Mudança Global do Clima",
      icon: Flame,
      color: "bg-green-700",
      description: "Tomar medidas urgentes para combater a mudança climática e seus impactos.",
      ourContribution: "Reduzimos emissões de gases de efeito estufa ao promover a reciclagem, que consome menos energia que a produção a partir de matéria-prima.",
    },
    {
      number: 14,
      title: "Vida na Água",
      icon: Waves,
      color: "bg-blue-500",
      description: "Conservação e uso sustentável dos oceanos, dos mares e dos recursos marinhos para o desenvolvimento sustentável.",
      ourContribution: "Evitamos que plásticos cheguem aos oceanos, protegendo a vida marinha e os ecossistemas aquáticos.",
    },
    {
      number: 15,
      title: "Vida Terrestre",
      icon: Trees,
      color: "bg-green-600",
      description: "Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres.",
      ourContribution: "Reduzimos o descarte incorreto de resíduos que poluem solos e prejudicam ecossistemas terrestres.",
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
                ODSs da ONU
              </h1>
              <p className="text-lg text-muted-foreground">
                Conheça as Metas de Desenvolvimento Sustentável com as quais a Recycle está alinhada 
                e como contribuímos para um futuro melhor.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Compromisso com o Desenvolvimento Sustentável
              </h2>
              <p className="text-lg text-muted-foreground">
                As 17 Metas de Desenvolvimento Sustentável (ODSs) da ONU são um apelo universal para 
                acabar com a pobreza, proteger o planeta e garantir que todas as pessoas desfrutem de 
                paz e prosperidade até 2030. A Recycle está comprometida com 6 dessas metas.
              </p>
            </div>
          </div>
        </section>

        {/* SDGs Grid */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {sdgs.map((sdg) => (
                <Card 
                  key={sdg.number} 
                  className="border-2 hover:border-secondary transition-all duration-300 hover-lift gradient-card"
                >
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className={`${sdg.color} w-16 h-16 rounded-xl shadow-medium flex items-center justify-center flex-shrink-0`}>
                        <sdg.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold bg-clip-text text-transparent gradient-secondary mb-1">
                          ODS {sdg.number}
                        </div>
                        <h3 className="text-xl font-bold">{sdg.title}</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Objetivo da ONU:</h4>
                        <p className="text-muted-foreground">{sdg.description}</p>
                      </div>
                      
                      <div className="pt-4 border-t border-border">
                        <h4 className="font-semibold mb-2 bg-clip-text text-transparent gradient-secondary">Nossa Contribuição:</h4>
                        <p className="text-muted-foreground">{sdg.ourContribution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Faça Parte Desta Mudança
              </h2>
              <p className="text-lg text-muted-foreground">
                Cada ação conta. Ao utilizar nossas máquinas, você contribui diretamente para o 
                alcance dessas metas globais e ajuda a construir um futuro mais sustentável para todos.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SDGs;
