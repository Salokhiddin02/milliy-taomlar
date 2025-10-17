import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professional-tips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professional-tips.html',
  styleUrl: './professional-tips.css'
})
export class ProfessionalTips {
  
  professionalTips = [
    {
      id: 1,
      title: "Tuzni To'g'ri Ishlatish",
      icon: "🧂",
      description: "Taomga tuz qo'shishdan oldin ta'mini tekshiring. Tuz qo'shish oson, lekin kamaytirish qiyin.",
      category: "Asosiy Texnika"
    },
    {
      id: 2,
      title: "Olov Kuchini Boshqarish",
      icon: "🔥",
      description: "Har xil taomlar uchun turli xil olov kuchidan foydalaning. Sotuvda kuchli, pishirishda o'rta, qovurishda kichik olov.",
      category: "Asosiy Texnika"
    },
    {
      id: 3,
      title: "Sabzavotlarni To'g'ri Kesish",
      icon: "🥕",
      description: "Sabzavotlarni bir xil o'lchamda kesing. Bu ularning bir vaqtda pishishini ta'minlaydi.",
      category: "Tayyorlash"
    },
    {
      id: 4,
      title: "Suvni Qaynatishdan Oldin",
      icon: "💧",
      description: "Makaron yoki sabzavot pishirishdan oldin suvni to'liq qaynatib oling. Keyin tuz qo'shing.",
      category: "Asosiy Texnika"
    },
    {
      id: 5,
      title: "Go'shtni Damlash",
      icon: "🥩",
      description: "Go'shtni pishirgandan keyin 5-10 daqiqa damlashing. Bu shiraning qayta taqsimlanishini ta'minlaydi.",
      category: "Go'sht Tayyorlash"
    },
    {
      id: 6,
      title: "Sarimsoqni To'g'ri Ishlatish",
      icon: "🧄",
      description: "Sarimsoqni juda ko'p qovurmaslik. Faqat 30 soniya qovuring, aks holda achchiq bo'ladi.",
      category: "Ziravorlar"
    },
    {
      id: 7,
      title: "Yog'ni Qizdirish",
      icon: "🫒",
      description: "Qovurishdan oldin yog'ni to'liq qizdirib oling. Yog' qizdirilganda oson qovriladi.",
      category: "Asosiy Texnika"
    },
    {
      id: 8,
      title: "Tuxum Tayyorlash",
      icon: "🥚",
      description: "Tuxumlarni xonadagi haroratda 30 daqiqa saqlang. Bu ularni pishirishda yaxshiroq natija beradi.",
      category: "Tuxum Tayyorlash"
    },
    {
      id: 9,
      title: "Baliqni To'g'ri Pishirish",
      icon: "🐟",
      description: "Baliqni pishirishda har 2.5 sm qalinlik uchun 10 daqiqa vaqt sarflang.",
      category: "Baliq Tayyorlash"
    },
    {
      id: 10,
      title: "Salat Tayyorlash",
      icon: "🥗",
      description: "Salatni pishirishdan oldin sovuq suvda yuvib, qog'oz sochiqda quriting.",
      category: "Salat Tayyorlash"
    }
  ];

  getTipsByCategory(category: string) {
    return this.professionalTips.filter(tip => tip.category === category);
  }

  getCategories() {
    return [...new Set(this.professionalTips.map(tip => tip.category))];
  }
}



