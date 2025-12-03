import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Document {
  id: number;
  title: string;
  category: string;
  date: string;
  type: string;
}

const documents: Document[] = [
  { id: 1, title: 'Устав Агропромышленного союза Крыма', category: 'Уставные документы', date: '15.03.2024', type: 'PDF' },
  { id: 2, title: 'Положение о членстве в союзе', category: 'Нормативные акты', date: '20.02.2024', type: 'PDF' },
  { id: 3, title: 'Правила внутреннего распорядка', category: 'Нормативные акты', date: '10.01.2024', type: 'PDF' },
  { id: 4, title: 'Отчет о деятельности за 2023 год', category: 'Отчеты', date: '25.12.2023', type: 'PDF' },
  { id: 5, title: 'Стратегия развития на 2024-2026', category: 'Стратегические документы', date: '05.12.2023', type: 'PDF' },
  { id: 6, title: 'Рекомендации по органическому земледелию', category: 'Методические материалы', date: '15.11.2023', type: 'PDF' },
];

const projects = [
  {
    id: 1,
    title: 'Развитие органического земледелия',
    description: 'Программа поддержки производителей органической продукции в Крыму',
    status: 'Активный',
    image: 'https://cdn.poehali.dev/projects/483216d8-0000-43f4-9185-c1b35c1f3c05/files/e935344f-8b03-4be6-b785-53ffcff6c390.jpg'
  },
  {
    id: 2,
    title: 'Цифровизация АПК',
    description: 'Внедрение современных IT-решений для сельского хозяйства',
    status: 'В разработке',
    image: 'https://cdn.poehali.dev/projects/483216d8-0000-43f4-9185-c1b35c1f3c05/files/07be859d-90be-448b-91f1-76e7bdc5f68b.jpg'
  },
  {
    id: 3,
    title: 'Экспорт крымской продукции',
    description: 'Расширение рынков сбыта для крымских производителей',
    status: 'Активный',
    image: 'https://cdn.poehali.dev/projects/483216d8-0000-43f4-9185-c1b35c1f3c05/files/133ac148-50df-4d3e-aabf-aac75d909f0e.jpg'
  },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(documents.map(doc => doc.category)))];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Wheat" className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Агропромышленный союз Крыма</h1>
                <p className="text-sm text-muted-foreground">Объединяем усилия для развития АПК</p>
              </div>
            </div>
          </div>
          <nav className="mt-4">
            <div className="flex gap-2 flex-wrap">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'about', label: 'О союзе', icon: 'Users' },
                { id: 'activity', label: 'Деятельность', icon: 'Briefcase' },
                { id: 'projects', label: 'Проекты', icon: 'Rocket' },
                { id: 'documents', label: 'Документы', icon: 'FileText' },
                { id: 'contacts', label: 'Контакты', icon: 'Mail' },
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className="gap-2"
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </Button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            <section
              className="relative h-[500px] bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://cdn.poehali.dev/projects/483216d8-0000-43f4-9185-c1b35c1f3c05/files/133ac148-50df-4d3e-aabf-aac75d909f0e.jpg')`
              }}
            >
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <h2 className="text-5xl font-bold mb-4">Развиваем агропромышленный комплекс Крыма</h2>
                  <p className="text-xl mb-6">Объединение работодателей для эффективного сотрудничества и развития</p>
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                    Узнать больше
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </div>
              </div>
            </section>

            <section className="py-16 bg-muted/30">
              <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-center mb-12">Наши направления</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: 'Handshake', title: 'Объединение усилий', desc: 'Создаём платформу для сотрудничества предприятий АПК' },
                    { icon: 'TrendingUp', title: 'Развитие отрасли', desc: 'Поддержка инноваций и модернизации производства' },
                    { icon: 'Shield', title: 'Защита интересов', desc: 'Представительство во взаимодействии с органами власти' },
                  ].map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                          <Icon name={item.icon as any} className="text-secondary" size={24} />
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{item.desc}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-6">Почему важно вступить в союз?</h3>
                    <ul className="space-y-4">
                      {[
                        'Доступ к отраслевой экспертизе и консультациям',
                        'Участие в совместных проектах и программах',
                        'Возможность влиять на развитие АПК региона',
                        'Сетевое взаимодействие с коллегами',
                        'Поддержка в решении производственных вопросов',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={20} />
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img
                      src="https://cdn.poehali.dev/projects/483216d8-0000-43f4-9185-c1b35c1f3c05/files/07be859d-90be-448b-91f1-76e7bdc5f68b.jpg"
                      alt="Агропромышленность"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="animate-fade-in py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8">О союзе</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Target" className="text-secondary" />
                      Наша миссия
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Агропромышленный союз Крыма объединяет предприятия и организации АПК для развития сельского хозяйства региона, 
                      защиты общих интересов и создания благоприятных условий для ведения бизнеса.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Eye" className="text-secondary" />
                      Наше видение
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Мы стремимся сделать крымский АПК конкурентоспособным, инновационным и устойчивым, 
                      обеспечивая продовольственную безопасность региона и создавая новые рабочие места.
                    </p>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Lightbulb" className="text-secondary" />
                      Наши ценности
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { title: 'Сотрудничество', desc: 'Открытый диалог и партнёрство' },
                        { title: 'Инновации', desc: 'Внедрение передовых технологий' },
                        { title: 'Устойчивость', desc: 'Ответственное природопользование' },
                      ].map((value, index) => (
                        <div key={index} className="text-center">
                          <h4 className="font-semibold mb-2">{value.title}</h4>
                          <p className="text-sm text-muted-foreground">{value.desc}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'activity' && (
          <div className="animate-fade-in py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8">Деятельность</h2>
              <Tabs defaultValue="main" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="main">Основная</TabsTrigger>
                  <TabsTrigger value="consulting">Консультации</TabsTrigger>
                  <TabsTrigger value="education">Обучение</TabsTrigger>
                  <TabsTrigger value="representation">Представительство</TabsTrigger>
                </TabsList>

                <TabsContent value="main" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Координация деятельности членов</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Организация взаимодействия между предприятиями АПК, содействие развитию кооперации и интеграции.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Проведение регулярных совещаний и форумов</li>
                        <li>Организация бизнес-встреч и круглых столов</li>
                        <li>Координация совместных закупок и продаж</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="consulting" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Консультационные услуги</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Предоставление экспертной поддержки членам союза по различным вопросам ведения бизнеса.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Правовое консультирование</li>
                        <li>Технологическая экспертиза</li>
                        <li>Консультации по грантам и субсидиям</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="education" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Образовательные программы</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Организация обучающих мероприятий для повышения квалификации специалистов АПК.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Семинары и тренинги</li>
                        <li>Мастер-классы от ведущих экспертов</li>
                        <li>Стажировки на передовых предприятиях</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="representation" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Представительство интересов</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Взаимодействие с органами власти и общественными организациями для защиты интересов АПК.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Участие в разработке нормативных актов</li>
                        <li>Представительство в отраслевых советах</li>
                        <li>Защита прав членов союза</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}

        {activeSection === 'projects' && (
          <div className="animate-fade-in py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8">Проекты</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={project.status === 'Активный' ? 'default' : 'secondary'}>
                          {project.status}
                        </Badge>
                      </div>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{project.description}</p>
                      <Button className="w-full mt-4" variant="outline">
                        Подробнее
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'documents' && (
          <div className="animate-fade-in py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8">Библиотека документов</h2>
              
              <div className="mb-6 space-y-4">
                <div className="flex gap-4 flex-wrap">
                  <Input
                    placeholder="Поиск по документам..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-md"
                  />
                </div>
                
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory(category)}
                      size="sm"
                    >
                      {category === 'all' ? 'Все категории' : category}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                {filteredDocuments.map((doc) => (
                  <Card key={doc.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{doc.title}</CardTitle>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="secondary">{doc.category}</Badge>
                            <Badge variant="outline">{doc.type}</Badge>
                          </div>
                        </div>
                        <Button size="sm" className="ml-4">
                          <Icon name="Download" size={16} />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Calendar" size={14} className="mr-2" />
                        Опубликовано: {doc.date}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredDocuments.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="FileX" className="mx-auto text-muted-foreground mb-4" size={48} />
                  <p className="text-muted-foreground">Документы не найдены</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="animate-fade-in py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8">Контакты</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Контактная информация</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Icon name="MapPin" className="text-secondary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Адрес</p>
                          <p className="text-muted-foreground">Республика Крым, г. Симферополь</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Phone" className="text-secondary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Телефон</p>
                          <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Mail" className="text-secondary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-muted-foreground">info@apk-crimea.ru</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Clock" className="text-secondary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Режим работы</p>
                          <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Отправить сообщение</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Имя</label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Сообщение</label>
                        <textarea
                          className="w-full min-h-[120px] px-3 py-2 border rounded-md"
                          placeholder="Ваше сообщение..."
                        />
                      </div>
                      <Button className="w-full">
                        Отправить
                        <Icon name="Send" className="ml-2" size={16} />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Агропромышленный союз Крыма</h3>
              <p className="text-primary-foreground/80">
                Объединение работодателей агропромышленного комплекса и смежных отраслей Республики Крым
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>О союзе</li>
                <li>Деятельность</li>
                <li>Проекты</li>
                <li>Документы</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>г. Симферополь, Республика Крым</li>
                <li>info@apk-crimea.ru</li>
                <li>+7 (XXX) XXX-XX-XX</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/80">
            <p>&copy; 2024 Агропромышленный союз Крыма. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
