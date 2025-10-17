import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

export interface RetseptData {
  id: string;
  nomi: string;
  mamlakat: string;
  vaqt: string;
  kishi: number;
  qiyinlik: 'Oson' | 'O\'rta' | 'Qiyin';
  ingredientlar: string[];
  qadamlar: string[];
  maslahatlar: string[];
  kaloriya: number;
  emoji: string;
}

@Component({
  selector: 'app-retsept',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './retsept.html',
  styleUrl: './retsept.css'
})
export class Retsept implements OnInit {
  retsept: RetseptData | null = null;
  retseptlar: RetseptData[] = [
    {
      id: 'uzbek-palov',
      nomi: 'O\'zbek Palovi',
      mamlakat: 'O\'zbekiston',
      vaqt: '2 soat',
      kishi: 6,
      qiyinlik: 'O\'rta',
      emoji: '🍚',
      ingredientlar: [
        '1 kg guruch',
        '500g qo\'zi go\'shti',
        '3 ta piyoz',
        '3 ta sabzi',
        '100ml yog\'',
        '2 osh qoshiq tuz',
        '1 osh qoshiq zira',
        '1 osh qoshiq qora murch'
      ],
      qadamlar: [
        'Go\'shtni kichik bo\'laklarga bo\'ling va yog\'da qovuring',
        'Piyozni mayda to\'g\'rab, go\'shtga qo\'shing',
        'Sabzini uzun-uzun to\'g\'rab, qovurayotgan go\'shtga qo\'shing',
        'Zira, tuz va murchni qo\'shib, 5 daqiqa qovuring',
        'Guruchni yuvib, go\'shtga qo\'shing',
        'Issiq suv quyib, yuqori olovda qaynatib, past olovda 40 daqiqa pishiring',
        'Tayyor bo\'lganda, aralashtirmasdan, 10 daqiqa dam berib, dasturxonga torting'
      ],
      maslahatlar: [
        'Guruchni yaxshi yuvish kerak, shunda yelim bo\'lmaydi',
        'Go\'shtni avval qovurish kerak, keyin sabzavot qo\'shish',
        'Suv miqdorini to\'g\'ri hisoblash muhim - guruchdan 1.5 baravar ko\'p',
        'Pishirish jarayonida aralashtirmaslik kerak'
      ],
      kaloriya: 450
    },
    {
      id: 'sushi',
      nomi: 'Sushi',
      mamlakat: 'Yaponiya',
      vaqt: '30 daqiqa',
      kishi: 4,
      qiyinlik: 'Qiyin',
      emoji: '🍣',
      ingredientlar: [
        '2 stakan guruch',
        '300g tuzli baliq (salmon)',
        '4 ta nori bargi',
        '1 osh qoshiq sirkali suv',
        '1 choy qoshiq shakar',
        '1 choy qoshiq tuz',
        'Wasabi va soya sousi'
      ],
      qadamlar: [
        'Guruchni yuvib, suv bilan pishiring',
        'Sirka, shakar va tuzni aralashtirib, guruchga qo\'shing',
        'Balikni ingichka bo\'laklarga to\'g\'rang',
        'Nori bargiga guruchni tekis qilib yoying',
        'Balikni guruch ustiga qo\'ying',
        'Norini o\'rab, sushi hosil qiling',
        'Ingichka bo\'laklarga bo\'lib, dasturxonga torting'
      ],
      maslahatlar: [
        'Guruchni yaxshi pishirish kerak - yumshoq bo\'lishi kerak',
        'Norini nam holda ishlatish osonroq',
        'Balikni taze va sifatli tanlash muhim',
        'Sushi tayyorlashda qo\'llarni nam holda ushlash kerak'
      ],
      kaloriya: 350
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.retsept = this.retseptlar.find(r => r.id === id) || null;
    });
  }
}
