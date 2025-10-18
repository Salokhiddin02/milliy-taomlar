import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  hasVideo?: boolean;
  videoUrl?: string;
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
      kaloriya: 450,
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/watch?v=example1'
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
    },
    {
      id: 'manti',
      nomi: 'Manti',
      mamlakat: 'O\'zbekiston',
      vaqt: '2.5 soat',
      kishi: 6,
      qiyinlik: 'O\'rta',
      emoji: '🥟',
      ingredientlar: [
        '500g un',
        '300g qovoq',
        '200g mol go\'shti',
        '2 ta piyoz',
        '1 osh qoshiq tuz',
        '1 choy qoshiq qora murch',
        '100ml suv',
        '2 osh qoshiq yog\''
      ],
      qadamlar: [
        'Undan xamir qorib, 30 daqiqa dam bering',
        'Qovoqni mayda to\'g\'rab, tuz bilan aralashtiring',
        'Go\'shtni mayda to\'g\'rab, piyoz bilan aralashtiring',
        'Xamirni yupqa qilib yoying va kvadrat shaklida kesing',
        'Har bir kvadratga qovoq va go\'sht aralashmasini qo\'ying',
        'Xamirni o\'rab, manti shaklini bering',
        'Qaynoq suvda 15-20 daqiqa pishiring',
        'Tayyor bo\'lganda, yog\' va ziravor bilan dasturxonga torting'
      ],
      maslahatlar: [
        'Xamirni yupqa qilib yoyish kerak',
        'Qovoqni avval tuz bilan aralashtirib, suvini chiqarish kerak',
        'Mantini qaynoq suvda pishirish kerak',
        'Pishirish vaqtini nazorat qilish muhim'
      ],
      kaloriya: 320,
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/watch?v=example2'
    },
    {
      id: 'pizza',
      nomi: 'Pizza',
      mamlakat: 'Italiya',
      vaqt: '45 daqiqa',
      kishi: 4,
      qiyinlik: 'Oson',
      emoji: '🍕',
      ingredientlar: [
        '300g un',
        '200ml suv',
        '1 osh qoshiq xamirturush',
        '1 choy qoshiq tuz',
        '2 osh qoshiq zaytun yog\'i',
        '200g pomidor sousi',
        '150g mozzarella pishloq',
        '100g pepperoni',
        '1 ta piyoz',
        '1 ta qalampir'
      ],
      qadamlar: [
        'Undan xamir qorib, 1 soat dam bering',
        'Xamirni yumaloq shaklga keltiring',
        'Pomidor sousini xamir ustiga yoying',
        'Pishloq, pepperoni va sabzavotlarni qo\'shing',
        'Zaytun yog\'i sepib, 200°C da 15-20 daqiqa pishiring',
        'Qizil qobiq hosil bo\'lganda, dasturxonga torting'
      ],
      maslahatlar: [
        'Xamirni yaxshi qorish kerak',
        'Pomidor sousini ko\'p qo\'ymaslik kerak',
        'Pishloqni oxirida qo\'shish yaxshiroq',
        'Pishirish temperaturasini nazorat qilish muhim'
      ],
      kaloriya: 280
    },
    {
      id: 'shashlik',
      nomi: 'Shashlik',
      mamlakat: 'O\'zbekiston',
      vaqt: '4 soat',
      kishi: 8,
      qiyinlik: 'Oson',
      emoji: '🍖',
      ingredientlar: [
        '1 kg qo\'zi go\'shti',
        '3 ta piyoz',
        '1 osh qoshiq tuz',
        '1 choy qoshiq qora murch',
        '1 choy qoshiq zira',
        '2 osh qoshiq limon sharbati',
        '100ml zaytun yog\'i',
        '1 bog\' rayhon'
      ],
      qadamlar: [
        'Go\'shtni kichik bo\'laklarga bo\'ling',
        'Piyozni halqa shaklida to\'g\'rang',
        'Go\'shtni tuz, murch, zira bilan aralashtiring',
        'Limonsharbat va yog\' qo\'shib, 2 soat marinadlang',
        'Go\'shtni shishlarga tizib, mangalda pishiring',
        'Har 5 daqiqada aylantirib, 20-25 daqiqa pishiring',
        'Tayyor bo\'lganda, rayhon bilan bezatib dasturxonga torting'
      ],
      maslahatlar: [
        'Go\'shtni yaxshi marinadlash kerak',
        'Mangalni oldindan qizdirish muhim',
        'Go\'shtni tez-tez aylantirish kerak',
        'Pishirish vaqtini nazorat qilish muhim'
      ],
      kaloriya: 380
    },
    {
      id: 'lagmon',
      nomi: 'Lag\'mon',
      mamlakat: 'O\'zbekiston',
      vaqt: '1 soat',
      kishi: 4,
      qiyinlik: 'O\'rta',
      emoji: '🍲',
      ingredientlar: [
        '400g lag\'mon xamiri',
        '300g mol go\'shti',
        '2 ta piyoz',
        '2 ta sabzi',
        '1 ta qalampir',
        '2 ta pomidor',
        '100ml yog\'',
        '1 osh qoshiq tuz',
        '1 choy qoshiq qora murch',
        '1 bog\' ko\'k piyoz'
      ],
      qadamlar: [
        'Go\'shtni kichik bo\'laklarga bo\'ling',
        'Sabzavotlarni to\'g\'rang',
        'Yog\'da go\'shtni qovuring',
        'Piyoz va sabzavotlarni qo\'shib qovuring',
        'Pomidor qo\'shib, sho\'rva tayyorlang',
        'Lag\'mon xamirini qaynoq suvda pishiring',
        'Pishirilgan lag\'monni sho\'rva bilan aralashtiring',
        'Ko\'k piyoz sepib, dasturxonga torting'
      ],
      maslahatlar: [
        'Lag\'mon xamirini qo\'lda tortish yaxshiroq',
        'Sho\'rva miqdorini to\'g\'ri hisoblash kerak',
        'Sabzavotlarni tartib bilan qo\'shish muhim',
        'Lag\'monni sho\'rva bilan aralashtirish kerak'
      ],
      kaloriya: 420
    },
    {
      id: 'somsa',
      nomi: 'Somsa',
      mamlakat: 'O\'zbekiston',
      vaqt: '1 soat',
      kishi: 6,
      qiyinlik: 'Oson',
      emoji: '🥟',
      ingredientlar: [
        '500g un',
        '300g mol go\'shti',
        '2 ta piyoz',
        '1 osh qoshiq tuz',
        '1 choy qoshiq qora murch',
        '1 choy qoshiq zira',
        '100ml suv',
        '2 osh qoshiq yog\''
      ],
      qadamlar: [
        'Undan xamir qorib, 20 daqiqa dam bering',
        'Go\'shtni mayda to\'g\'rab, piyoz bilan aralashtiring',
        'Tuz, murch va zira qo\'shing',
        'Xamirni yupqa qilib yoying',
        'Go\'sht aralashmasini xamirga qo\'ying',
        'Xamirni o\'rab, somsa shaklini bering',
        'Tandirda yoki pishirgichda 25-30 daqiqa pishiring',
        'Qizil qobiq hosil bo\'lganda, dasturxonga torting'
      ],
      maslahatlar: [
        'Xamirni yupqa qilib yoyish kerak',
        'Go\'shtni yaxshi aralashtirish muhim',
        'Tandirda pishirish yaxshiroq',
        'Pishirish vaqtini nazorat qilish kerak'
      ],
      kaloriya: 350
    },
    {
      id: 'tacos',
      nomi: 'Tacos',
      mamlakat: 'Meksika',
      vaqt: '20 daqiqa',
      kishi: 4,
      qiyinlik: 'Oson',
      emoji: '🌮',
      ingredientlar: [
        '8 ta tortilla',
        '400g mol go\'shti',
        '1 ta piyoz',
        '2 ta pomidor',
        '1 ta qalampir',
        '100g pishloq',
        '1 bog\' ko\'k piyoz',
        '2 osh qoshiq yog\'',
        '1 osh qoshiq tuz',
        '1 choy qoshiq qora murch'
      ],
      qadamlar: [
        'Go\'shtni kichik bo\'laklarga bo\'ling',
        'Yog\'da go\'shtni qovuring',
        'Piyoz va qalampirni qo\'shib qovuring',
        'Tuz va murch qo\'shing',
        'Tortillalarni qizdirib, go\'sht bilan to\'ldiring',
        'Pomidor, pishloq va ko\'k piyoz qo\'shing',
        'Tacoslarni o\'rab, dasturxonga torting'
      ],
      maslahatlar: [
        'Tortillalarni qizdirib ishlatish kerak',
        'Go\'shtni yaxshi qovurish muhim',
        'Sabzavotlarni taze ishlatish yaxshiroq',
        'Tacoslarni tez tayyorlash kerak'
      ],
      kaloriya: 320
    },
    {
      id: 'ramen',
      nomi: 'Ramen',
      mamlakat: 'Yaponiya',
      vaqt: '25 daqiqa',
      kishi: 2,
      qiyinlik: 'Oson',
      emoji: '🍜',
      ingredientlar: [
        '200g ramen noodle',
        '300g mol go\'shti',
        '2 ta tuxum',
        '1 ta piyoz',
        '2 ta qalampir',
        '1 bog\' ko\'k piyoz',
        '1 litr suv',
        '2 osh qoshiq soya sousi',
        '1 osh qoshiq tuz',
        '1 choy qoshiq qora murch'
      ],
      qadamlar: [
        'Suvni qaynatib, go\'shtni qo\'shing',
        'Soya sousi, tuz va murch qo\'shing',
        'Ramen noodle ni sho\'rvaga qo\'shing',
        'Tuxumni pishirib, yarimga bo\'ling',
        'Qalampir va ko\'k piyozni qo\'shing',
        '5 daqiqa qaynatib, dasturxonga torting'
      ],
      maslahatlar: [
        'Sho\'rvani yaxshi qaynatish kerak',
        'Noodle ni ko\'p pishirmaslik kerak',
        'Sabzavotlarni oxirida qo\'shish yaxshiroq',
        'Tuxumni yumshoq pishirish muhim'
      ],
      kaloriya: 450
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.retsept = this.retseptlar.find(r => r.id === id) || null;
    });
  }

  getEmbedUrl(videoUrl: string): SafeResourceUrl {
    // YouTube URL ni embed formatiga o'tkazish
    const videoId = this.extractVideoId(videoUrl);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  private extractVideoId(url: string): string {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : 'dQw4w9WgXcQ'; // fallback video
  }
}
