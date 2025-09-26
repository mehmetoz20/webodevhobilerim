import React from 'react';
import '../Components/Friends.css';
const Friends = () => {
  return (
    <div className='FriendsApp'>
      <h1 style={{fontSize:60,color:'orange'}}>Friends</h1>

      <h2>Friends Dizinin Konusu </h2>
      <p style={{fontSize:24}}>Friends, New York City'de yaşayan altı arkadaşın -Rachel Green, Ross Geller, Monica Geller, Chandler Bing, Joey Tribbiani ve Phoebe Buffay- günlük yaşamlarını, arkadaşlıklarını, aşk ilişkilerini ve kariyer mücadelelerini konu alan bir komedi dizisidir. Dizi, Rachel’ın düğününü terk edip eski lise arkadaşı Monica’nın yanına taşınmasıyla başlar ve grubun zamanla nasıl bir aile gibi birbirine bağlandığını gösterir. Kahkaha dolu sahneler, duygusal anlar ve unutulmaz repliklerle, hem arkadaşlık hem de yetişkinliğe geçiş temalarını işler.</p>
       <h2>Friends Oyuncuları</h2>
      <ul style={{listStyleType:'none'}} >
         <li style={{fontSize:20}}>Jeniffer Aniston</li>
      <li style={{fontSize:20}}>Courteney Cox</li>
      <li style={{fontSize:20}}>Lisa Kudrow </li>
      <li style={{fontSize:20}}>Matt LeBlanc </li>
      <li style={{fontSize:20}}>Matthew Perry </li>
      <li style={{fontSize:20}}>David Schwimmer</li>
      </ul>
       <h2>Friends Bölümler ve Sezonlar</h2>
      <p style={{fontSize:24}}>Friends dizisi toplam 10 sezon ve 236 bölümden oluşur. 22 Eylül 1994’te başlamış, 6 Mayıs 2004’te final yapmıştır. Her sezon ortalama 20–25 bölüm içerir ve bölümler genellikle 22 dakika civarındadır.
</p>
<h2>Friends Yayın Platformu ve Yayın Takvimi</h2>
<p style={{fontSize:24}}>NBC (Amerikan Ulusal Televizyon Kanalı)'de genellikle sonbaharda başlar, ilkbaharda sezon finali yapardı. Yeni bölümler genellikle Perşembe akşamları yayınlanıyordu.</p> 
<h2>Friends İzlenme Oranları ve Reytingler
</h2>
<p style={{fontSize:24}}>Dizi, 10 sezon boyunca ortalama 20–25 milyon izleyiciye ulaştı. ABD'de her sezon Nielsen reytinglerinde en çok izlenen diziler arasında yer aldı. Globalde ise 100'den fazla ülkede yayınlandı ve hâlâ milyonlarca kişi tarafından izleniyor.
</p>
   <h2>Sevdiğim Sahneler</h2>
   <div className="video-container">
         
       <iframe width="600" height="350" src="https://www.youtube.com/embed/ES8g9VqVC84" title="Friends Komik Sahneler Türkçe Altyazılı" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
       
      </div>
     
      
    </div>
  );
};

export default Friends;
