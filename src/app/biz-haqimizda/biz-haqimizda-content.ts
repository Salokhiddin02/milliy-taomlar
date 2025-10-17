import { Component } from '@angular/core';

@Component({
  selector: 'app-biz-haqimizda-content',
  standalone: true,
  template: `
    <div class="about-hero">
      <div class="about-text">
        <h2>Bizning Maqsadimiz</h2>
        <p>
          Biz turli millatlarining noyob va mazali milliy taomlarini dunyo bilan baham ko'rishni 
          maqsad qilganmiz. Har bir taom o'z tarixi, an'anasi va maxsus retseptiga ega bo'lib, 
          biz bularni sizga taqdim etmoqdamiz.
        </p>
        
        <h3>Nima Qilamiz?</h3>
        <ul class="features-list">
          <li>🌍 Dunyoning har bir burchagidan milliy taomlarni to'playmiz</li>
          <li>📖 Har bir taom uchun batafsil retsept va tayyorlash yo'riqnomasi beramiz</li>
          <li>👨‍🍳 Professional oshpazlardan maslahat va maslahatlar taqdim etamiz</li>
          <li>🏛️ Har bir taomning tarixi va an'anaviy qiymatini tushuntiramiz</li>
        </ul>
      </div>
      
      <div class="about-image">
        <div class="image-placeholder">
          <span style="font-size: 6rem;">🍽️</span>
        </div>
      </div>
    </div>
    
    <div class="stats-section">
      <h2>Bizning Ko'rsatkichlarimiz</h2>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number">50+</div>
          <div class="stat-label">Milliy Taomlar</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">25+</div>
          <div class="stat-label">Mamlakatlar</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">1000+</div>
          <div class="stat-label">Foydalanuvchilar</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">5</div>
          <div class="stat-label">Yil Tajriba</div>
        </div>
      </div>
    </div>
    
    <div class="team-section">
      <h2>Bizning Jamoa</h2>
      <p class="team-description">
        Bizning jamoa oshpazlar, oziq-ovqat tarixchilari va texnologiya mutaxassislaridan iborat.
      </p>
    </div>
  `,
  styles: [`
    .about-hero {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
      margin-bottom: 4rem;
      align-items: center;
    }

    .about-text h2 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 1rem;
    }

    .about-text h3 {
      font-size: 1.5rem;
      color: #333;
      margin: 2rem 0 1rem;
    }

    .about-text p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #666;
      margin-bottom: 1.5rem;
    }

    .features-list {
      list-style: none;
      padding: 0;
    }

    .features-list li {
      padding: 0.5rem 0;
      font-size: 1.1rem;
      color: #555;
      display: flex;
      align-items: center;
    }

    .about-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-placeholder {
      background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
      border-radius: 20px;
      padding: 3rem;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .stats-section {
      background: #f8f9fa;
      padding: 3rem;
      border-radius: 15px;
      margin-bottom: 3rem;
    }

    .stats-section h2 {
      text-align: center;
      font-size: 2rem;
      color: #333;
      margin-bottom: 2rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .stat-item {
      text-align: center;
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .stat-number {
      font-size: 3rem;
      font-weight: bold;
      color: #667eea;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 1.1rem;
      color: #666;
      font-weight: 500;
    }

    .team-section {
      text-align: center;
      padding: 3rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 15px;
    }

    .team-section h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .team-description {
      font-size: 1.2rem;
      line-height: 1.6;
      max-width: 600px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      .about-hero {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .stats-section,
      .team-section {
        padding: 2rem;
      }
    }

    @media (max-width: 480px) {
      .stats-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class BizHaqimizdaContent {}








