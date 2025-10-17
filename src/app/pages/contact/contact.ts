import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;
  
  faqs = [
    {
      question: "Qanday taomlar retseptlarini taklif qilishim mumkin?",
      answer: "Siz bizga email orqali yoki kontakt formasidan foydalanib, o'z retseptlaringizni yuborishingiz mumkin. Biz har bir taklifni diqqat bilan ko'rib chiqamiz.",
      open: false
    },
    {
      question: "Retseptlar to'g'riligini qanday tekshiraman?",
      answer: "Bizning barcha retseptlar professional oshpazlar tomonidan sinovdan o'tkaziladi va aniq baholash koeffitsiyentlari bilan taqdim etiladi.",
      open: false
    },
    {
      question: "Veb-saytda qanday tillar qo'llab-quvvatlanadi?",
      answer: "Hozircha faqat o'zbek tili qo'llab-quvvatlanadi, lekin kelajakda ingliz va rus tillarini ham qo'shish rejalashtirilmoqda.",
      open: false
    },
    {
      question: "Retseptlarni yuklab olish imkoniyati bormi?",
      answer: "Ha, barcha retseptlarni PDF formatida yuklab olish imkoniyati mavjud. Bu xususiyat tez orada ishga tushiriladi.",
      open: false
    },
    {
      question: "Biznes hamkorlik uchun qanday bog'lanish kerak?",
      answer: "Biznes hamkorlik uchun bizga info@milliy-taomlar.uz emailiga yozing yoki +998 90 123 45 67 raqamiga qo'ng'iroq qiling.",
      open: false
    }
  ];

  testimonials = [
    {
      name: "Malika Karimova",
      location: "Toshkent",
      message: "Bu sayt orqali juda ko'p yangi taomlar o'rganishim mumkin bo'ldi. Retseptlar juda aniq va tushunarli."
    },
    {
      name: "Bobur Toshmatov",
      location: "Samarqand",
      message: "Milliy taomlarimizni saqlab qolish va tarqatish uchun ajoyib platforma. Katta rahmat!"
    },
    {
      name: "Gulnora Yusupova",
      location: "Buxoro",
      message: "Oilam uchun yangi taomlar pishirish juda oson bo'ldi. Har bir retsept sinovdan o'tgan va ishonchli."
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/)]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      newsletter: [false]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        
        // Reset form
        this.contactForm.reset();
        this.contactForm.patchValue({
          newsletter: false
        });
        
        // Show success message
        this.showSuccessMessage = true;
        this.isSubmitting = false;
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
        
        // Here you would typically send the data to your backend
        // this.contactService.submitContactForm(this.contactForm.value)
        //   .subscribe(response => {
        //     // Handle response
        //   });
      }, 1500);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }

  openChat(): void {
    // Simulate opening chat
    alert('Onlayn chat tez orada ishga tushiriladi! Hozircha bizga email yuboring.');
  }

  openInGoogleMaps(): void {
    const address = 'Toshkent shahri, Yunusobod tumani, Navoiy ko\'chasi 15';
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  }

  getDirections(): void {
    const address = 'Toshkent shahri, Yunusobod tumani, Navoiy ko\'chasi 15';
    const encodedAddress = encodeURIComponent(address);
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(directionsUrl, '_blank');
  }
}
