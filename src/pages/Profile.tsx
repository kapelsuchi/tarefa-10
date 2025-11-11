import { useState } from "react";
import { User, Mail, Award, Recycle as RecycleIcon, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "João Silva",
    email: "joao.silva@email.com",
  });

  const stats = [
    {
      icon: RecycleIcon,
      label: "Itens Reciclados",
      value: "247",
      color: "text-primary",
    },
    {
      icon: Award,
      label: "Pontos Acumulados",
      value: "1,240",
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      label: "Impacto Ambiental",
      value: "98kg CO₂",
      color: "text-primary",
    },
  ];

  const recentActivity = [
    { date: "15/01/2025", items: 5, points: 25, type: "Garrafas PET" },
    { date: "12/01/2025", items: 8, points: 40, type: "Latas de Alumínio" },
    { date: "10/01/2025", items: 3, points: 15, type: "Garrafas PET" },
    { date: "08/01/2025", items: 6, points: 30, type: "Latas de Alumínio" },
  ];

  const handleSave = () => {
    toast({
      title: "Perfil atualizado!",
      description: "Suas informações foram salvas com sucesso.",
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Profile Header */}
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{userData.name}</h1>
              <p className="text-muted-foreground">{userData.email}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Profile Information */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Informações do Perfil
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      {isEditing ? "Cancelar" : "Editar"}
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nome</label>
                    <Input
                      value={userData.name}
                      onChange={(e) =>
                        setUserData({ ...userData, name: e.target.value })
                      }
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      value={userData.email}
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                      disabled={!isEditing}
                    />
                  </div>
                  {isEditing && (
                    <Button onClick={handleSave} className="w-full">
                      Salvar Alterações
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Atividades Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted"
                      >
                        <div>
                          <div className="font-semibold">{activity.type}</div>
                          <div className="text-sm text-muted-foreground">
                            {activity.date}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-primary">
                            +{activity.points} pts
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {activity.items} itens
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements Section */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Conquistas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "Primeiro Passo", desc: "Primeiro descarte", unlocked: true },
                    { name: "Eco Warrior", desc: "100 itens reciclados", unlocked: true },
                    { name: "Green Hero", desc: "500 itens reciclados", unlocked: false },
                    { name: "Planeta Salvo", desc: "1000 itens reciclados", unlocked: false },
                  ].map((achievement, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg text-center ${
                        achievement.unlocked
                          ? "bg-primary/10 border-2 border-primary"
                          : "bg-muted opacity-50"
                      }`}
                    >
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
                        <Award
                          className={`h-6 w-6 ${
                            achievement.unlocked ? "text-primary" : "text-muted-foreground"
                          }`}
                        />
                      </div>
                      <div className="font-semibold text-sm">{achievement.name}</div>
                      <div className="text-xs text-muted-foreground">{achievement.desc}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
