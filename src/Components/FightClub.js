import React from 'react';
import '../Components/FightClub.css';



const FightClub = () => {
  return (
    <div className='FightClubApp'>
     <h1 style={{fontSize:60,color:'Red'}}>FightClub</h1>

      <h2 style={{color:'red'}}>FightClub Felsefesi</h2>
      <p style={{fontSize:24,color:'red'}}>“Fight Club” (1999 yapımı film ve Chuck Palahniuk’un romanı) sadece dövüş sahnelerinden ibaret bir hikaye değildir; aslında modern toplum, tüketim kültürü ve bireysel kimlik üzerine sert bir felsefe taşır. Fight Club’ın temel felsefesi birkaç ana noktada özetlenebilir:.</p>
 
    

    <h3 style={{color:'red'}}>1. Tüketim ve Modern Hayatın Boşluğu </h3> 
    <p style={{fontSize:20,color:'red'}}>Fight Club, modern kapitalist toplumun insanları birer “tüketici”ye dönüştürdüğünü savunur.
İnsanlar, kimliklerini sahip oldukları eşyalar, iş unvanları veya sosyal statü üzerinden tanımlar.
Tyler Durden’ın (filmin karizmatik anti-kahramanı) felsefesi: “Sen sahip olduklarınla tanımlanmıyorsun; senin değerin bununla ölçülemez.”</p>

 <h3 style={{color:'red'}}>2. Acı ve Şiddetle Kendini Bulma</h3>
 <p style={{fontSize:20,color:'red'}}>Dövüş kulübü, üyelerinin acıyı ve fiziksel şiddeti deneyimleyerek “gerçek benliklerini” bulmalarını amaçlar.

Bu şiddet, bir tür uyanış ve özgürleşme aracı olarak görülür; modern hayatın yapaylığı ve duygusal uyuşukluğuna karşı bir başkaldırıdır.</p>      

 <h3 style={{color:'red'}}>3. Bireysel Kimlik ve Özgürlük</h3>
 <p style={{fontSize:20,color:'red'}}>Tyler Durden, bireyin kendini toplumun dayattığı kurallar, normlar ve beklentilerden kurtarması gerektiğini savunur.

“Kurallara uymayan” ve “sisteme başkaldıran” bir yaşam tarzı teşvik edilir.

Fight Club, üyelerinin kontrolsüz bir özgürlük arayışı içinde kimliklerini yeniden keşfetmesine olanak tanır.</p>

<h3 style={{color:'red'}}>4. Kaos ve Yıkım</h3>
<p style={{fontSize:20,color:'red'}}>Film, yapısal ve psikolojik yıkımı bir tür arınma olarak görür.

Tyler Durden’ın bakış açısına göre, eski düzenin (iş, ev, tüketim döngüsü) yok edilmesi, bireyin gerçekten özgür olmasının yoludur.</p>
<h3 style={{color:'red'}}>5. Ego ve Alter Ego</h3>
<p style={{fontSize:20,color:'red'}}>Baş karakterin alter egosu Tyler Durden, bireyin bastırılmış arzularını ve öfkesini temsil eder.

Bu, içsel çatışmanın ve kendi “gölge” tarafını kabul etmenin bir metaforu olarak yorumlanabilir.</p>

    <h1 style={{color:'white'}}>Filmdeki En Sevdiğim Sahne</h1>
   <div className="video-container"> 
         
          <iframe width="487" height="366" src="https://www.youtube.com/embed/JIH9kuFDp_U" title="“Just Let Go” | Fight Club" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
      </div>
     
    </div>
  );
};

export default FightClub;

