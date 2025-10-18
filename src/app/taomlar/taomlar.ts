import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface TaomData {
  id: string;
  nomi: string;
  mamlakat: string;
  vaqt: string;
  emoji: string;
  tavsif: string;
  hasVideo?: boolean;
  videoUrl?: string;
}

@Component({
  selector: 'app-taomlar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './taomlar.html',
  styleUrl: './taomlar.css'
})
export class Taomlar {
  taomlar: TaomData[] = [
    {
      id: 'uzbek-palov',
      nomi: 'O\'zbek Palovi',
      mamlakat: 'O\'zbekiston',
      vaqt: '2 soat',
      emoji: '🍚',
      tavsif: 'O\'zbekistonning milliy taomi - go\'sht, sabzavot va guruchdan tayyorlanadi',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/watch?v=example1'
    },
    {
      id: 'sushi',
      nomi: 'Sushi',
      mamlakat: 'Yaponiya',
      vaqt: '30 daqiqa',
      emoji: '🍣',
      tavsif: 'Yaponiyaning an\'anaviy taomi - baliq va guruchdan tayyorlanadi'
    },
    {
      id: 'pizza',
      nomi: 'Pizza',
      mamlakat: 'Italiya',
      vaqt: '45 daqiqa',
      emoji: '🍕',
      tavsif: 'Italiyaning mashhur taomi - xamir, pomidor va pishloqdan tayyorlanadi'
    },
    {
      id: 'tacos',
      nomi: 'Tacos',
      mamlakat: 'Meksika',
      vaqt: '20 daqiqa',
      emoji: '🌮',
      tavsif: 'Meksikaning milliy taomi - tortilla, go\'sht va sabzavotdan tayyorlanadi'
    },
    {
      id: 'ramen',
      nomi: 'Ramen',
      mamlakat: 'Yaponiya',
      vaqt: '25 daqiqa',
      emoji: '🍜',
      tavsif: 'Yaponiyaning issiq lag\'mon taomi - noodle va sho\'rvadan tayyorlanadi'
    },
    {
      id: 'paella',
      nomi: 'Paella',
      mamlakat: 'Ispaniya',
      vaqt: '1.5 soat',
      emoji: '🥘',
      tavsif: 'Ispaniyaning milliy taomi - guruch, dengiz mahsulotlari va sabzavotdan'
    },
    {
      id: 'manti',
      nomi: 'Manti',
      mamlakat: 'O\'zbekiston',
      vaqt: '2.5 soat',
      emoji: '🥟',
      tavsif: 'O\'zbekistonning an\'anaviy taomi - qovoq va go\'sht bilan to\'ldirilgan xamir',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/watch?v=example2'
    },
    {
      id: 'shashlik',
      nomi: 'Shashlik',
      mamlakat: 'O\'zbekiston',
      vaqt: '4 soat',
      emoji: '🍖',
      tavsif: 'O\'zbekistonning milliy taomi - mangalda pishirilgan go\'sht'
    },
    {
      id: 'lagmon',
      nomi: 'Lag\'mon',
      mamlakat: 'O\'zbekiston',
      vaqt: '1 soat',
      emoji: '🍲',
      tavsif: 'O\'zbekistonning mashhur taomi - qo\'lda tortilgan lag\'mon va sho\'rva'
    },
    {
      id: 'somsa',
      nomi: 'Somsa',
      mamlakat: 'O\'zbekiston',
      vaqt: '1 soat',
      emoji: '🥟',
      tavsif: 'O\'zbekistonning an\'anaviy taomi - tandirda pishirilgan pishloq va go\'sht'
    },
    {
      id: 'hamburger',
      nomi: 'Hamburger',
      mamlakat: 'AQSh',
      vaqt: '15 daqiqa',
      emoji: '🍔',
      tavsif: 'Amerikaning mashhur taomi - kotlet, salat va non aralashmasidan'
    },
    {
      id: 'fish-and-chips',
      nomi: 'Fish and Chips',
      mamlakat: 'Buyuk Britaniya',
      vaqt: '30 daqiqa',
      emoji: '🐟',
      tavsif: 'Britaniyaning milliy taomi - qovurilgan baliq va kartoshka'
    },
    {
      id: 'croissant',
      nomi: 'Croissant',
      mamlakat: 'Fransiya',
      vaqt: '3 soat',
      emoji: '🥐',
      tavsif: 'Fransiyaning mashhur noni - qatlamli va xirtdor xamir'
    },
    {
      id: 'pad-thai',
      nomi: 'Pad Thai',
      mamlakat: 'Tailand',
      vaqt: '20 daqiqa',
      emoji: '🍝',
      tavsif: 'Tailandning milliy taomi - noodle, qisqichbaqa va sabzavot'
    },
    {
      id: 'biryani',
      nomi: 'Biryani',
      mamlakat: 'Hindiston',
      vaqt: '2 soat',
      emoji: '🍛',
      tavsif: 'Hindistonning mashhur taomi - guruch, go\'sht va ziravorlar'
    },
    {
      id: 'kimchi',
      nomi: 'Kimchi',
      mamlakat: 'Koreya',
      vaqt: '3 kun',
      emoji: '🥬',
      tavsif: 'Koreyaning milliy taomi - achchiq qovurilgan karam'
    },
    {
      id: 'pho',
      nomi: 'Pho',
      mamlakat: 'Vyetnam',
      vaqt: '4 soat',
      emoji: '🍜',
      tavsif: 'Vyetnamning milliy taomi - noodle sho\'rvasi va go\'sht'
    },
    {
      id: 'goulash',
      nomi: 'Goulash',
      mamlakat: 'Vengriya',
      vaqt: '2.5 soat',
      emoji: '🥩',
      tavsif: 'Vengriyaning milliy taomi - go\'sht sho\'rvasi va sabzavot'
    },
    {
      id: 'pierogi',
      nomi: 'Pierogi',
      mamlakat: 'Polsha',
      vaqt: '1.5 soat',
      emoji: '🥟',
      tavsif: 'Polshaning an\'anaviy taomi - pishloq va kartoshka bilan to\'ldirilgan'
    },
    {
      id: 'dumplings',
      nomi: 'Dumplings',
      mamlakat: 'Xitoy',
      vaqt: '45 daqiqa',
      emoji: '🥟',
      tavsif: 'Xitoyning mashhur taomi - go\'sht va sabzavot bilan to\'ldirilgan'
    },
    {
      id: 'bratwurst',
      nomi: 'Bratwurst',
      mamlakat: 'Germaniya',
      vaqt: '20 daqiqa',
      emoji: '🌭',
      tavsif: 'Germaniyaning milliy taomi - qovurilgan kolbasa'
    },
    {
      id: 'tacos-al-pastor',
      nomi: 'Tacos al Pastor',
      mamlakat: 'Meksika',
      vaqt: '3 soat',
      emoji: '🌮',
      tavsif: 'Meksikaning an\'anaviy taomi - cho\'chqa go\'shti va ananas'
    },
    {
      id: 'falafel',
      nomi: 'Falafel',
      mamlakat: 'Yaqin Sharq',
      vaqt: '2 soat',
      emoji: '🥙',
      tavsif: 'Yaqin Sharqning mashhur taomi - no\'xat va ziravorlar'
    },
    {
      id: 'moussaka',
      nomi: 'Moussaka',
      mamlakat: 'Gretsiya',
      vaqt: '2 soat',
      emoji: '🍆',
      tavsif: 'Gretsiyaning milliy taomi - baqlajon, go\'sht va bechamel'
    },
    {
      id: 'borscht',
      nomi: 'Borscht',
      mamlakat: 'Rossiya',
      vaqt: '1.5 soat',
      emoji: '🍲',
      tavsif: 'Rossiyaning milliy taomi - qizil lavlagi sho\'rvasi'
    }
  ];

  // Video Management
  openVideo(videoUrl: string | undefined, event: Event) {
    if (videoUrl) {
      event.stopPropagation();
      window.open(videoUrl, '_blank');
    }
  }
}
