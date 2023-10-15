<template>
    
    <body>
   <br>     
    <div class=" container ">

        <div class="row">
            <div class="col mb-4" v-for="(i, index) in travelList" :key="index">
                <div class="card" style="width: 18rem;">
                    <img :src="i.img" class="card-img-top" alt="new-new" style="width: 100%; height: 400px" />
                    <div class="card-body">
                        <h5 class="card-title">{{ i.name }}</h5>           
          <button @click="reserveTable(index)" class="main-button">จองที่นั่ง</button>
                <p>จำนวนการจองที่นั่ง: <span>{{ bookingCount[index] }}</span></p>
                    </div>
                </div>
            </div>
        </div>
        <br>
    </div>
    </body>
    
    <footer>
        <div class="form-user-buy">
         <label for="cinema-select">เลือกโรงภาพยนต์</label>
         <select v-model="selectedSeat" id="cinema-select">
          <option value="major-cen-cm">เมเจอร์ฯ เซ็นทรัลเฟสติวัล เชียงใหม่</option>
          <option value="major-cen-air-cm">เมเจอร์ฯ เชียงใหม่ แอร์พอร์ต</option>
          <option value="sf-maya-cm">เอส เอฟ เอ็กซ์ ซีเนม่า เมญ่า เชียงใหม่</option>
          <option value="PC-bangkok">พารากอน ซีนีเพล็กซ์</option>
        </select>
    
        <label for="seat-select">เลือกที่นั่ง</label>
         <select v-model="selectedSeat" id="seat-select">
          <option value="seat">A1</option>
          <option value="seat">A2</option>
          <option value="seat">A3</option>
          <option value="seat">A4</option>
          <option value="seat">A5</option>
          <option value="seat">A6</option>
          <option value="seat">A7</option>
          <option value="seat">A8</option>
          <option value="seat">A9</option>
          <option value="seat">A10</option>
          <option value="seat">B1</option>
          <option value="seat">B2</option>
          <option value="seat">B3</option>
          <option value="seat">B4</option>
          <option value="seat">B5</option>
          <option value="seat">B6</option>
          <option value="seat">B7</option>
          <option value="seat">B8</option>
          <option value="seat">B9</option>
          <option value="seat">B10</option>
          <option value="seat">C1</option>
          <option value="seat">C2</option>
          <option value="seat">C3</option>
          <option value="seat">C4</option>
          <option value="seat">C5</option>
          <option value="seat">C6</option>
          <option value="seat">C7</option>
          <option value="seat">C8</option>
          <option value="seat">C9</option>
          <option value="seat">C10</option>
        </select>
    
    <label for="time-select">เลือกรอบฉายภาพยนต์</label>
         <select v-model="selectedTime" id="time-select">
          <option value="time-1">10:30</option>
          <option value="time-2">12:00</option>
          <option value="time-3">14:30</option>
          <option value="time-4">16:30</option>
          <option value="time-5">18:00</option>
          <option value="time-6">20:30</option>
          <option value="time-6">22:00</option>
        </select>
        
       <label for="date-select">ระบุวันที่ต้องการชมภาพยนต์<input type="date" name="date_local" id="date_local"></label>
    
        </div>
        <div class="footer-content">
    <a href="#" class="bottom-button" @click="confirmBooking">ยืนยันการจอง</a>
    </div>
    </footer>
    </template>
    
    <script setup>
    import { ref } from "vue";
    
    
    const travel = ref("");
    const money = ref(0);
    
    const travelList=ref([
        { name: "นักรบมนตรา", img:"https://www.metalbridges.com/wp-content/uploads/2020/11/Poster-%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%9A%E0%B8%A1%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B8%B2-731x1024.jpg" },
        { name: "Taylor Swift Eras Tour", img:"https://www.mensjournal.com/.image/t_share/MjAwNDY5NzI0MDEyODE1NDY4/eras-tour-1.jpg" },
        { name: "14 อีกครั้ง", img:"https://cdni-hw.bugaboo.tv/dm/sz-md/i/images/2023/08/18/resize_14_i_love_you_two_thousand_poster_1692343188_6158.jpg" },
        { name: "โดราเอมอน เดอะ มูฟวี่ ฟากฟ้าแห่งยูโทเปียของโนบิตะ", img:"https://lh3.googleusercontent.com/VkSVLtBQEPRQVCnTEEyKWVWCEAp2jyPjOezlT4m9xVp6Xeby6hhJum2CKBNFPXwT7jMo4Oi2o4YgXtge086b43RICgIZtStqlw=s0" },
        { name: "The Exorcist Believer", img:"https://cdni-hw.bugaboo.tv/dm/sz-md/i/images/2023/08/24/f4ls0ogaqaazzcx_1692860164_3656.jpg" },
        { name: "สัปเหร่อ", img:"https://lh3.googleusercontent.com/wrwifA2tljkF99y0VW1isQRPRTS9chtM-_Co72ZosgNYI2WkQIdAlPania_9X7kiCjbbp6jSx2i3336mf6W_i5joG8Yeoh40giQ=w260" },
    
        { name: "ธี่หยด", img:"https://static.thairath.co.th/media/Dtbezn3nNUxytg04ajY6trjZW6Gl8B4X0ZLaqnhDhrDCzZ.webp" },
        { name: "เพื่อน(ไม่)สนิท", img:"https://s.isanook.com/mv/0/ud/30/152935/s__24223917.jpg?ip/resize/w728/q80/jpg" },
        { name: "Expendables 4", img:"https://m.media-amazon.com/images/M/MV5BMDFhYjc2NmUtNDBlOC00NDE5LTk5YWYtYmM4ZmMxNTUxMGNjXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg" },
        { name: "Wonka", img:"https://i.ebayimg.com/images/g/x~UAAOSwPxlkr~c-/s-l1200.webp" },
        { name: "เทปผีดุ", img:"https://lh3.googleusercontent.com/HLPKLnUerXkaK0cJT3Xg3cQJYqFxuNVx79edToVLrQ-s_Gpc-Fip8iBUnu4jdo-SX4YmfQV82TA3md0Y1gT8OJNrB9iqS9PlBg=s0" },
        { name: "The Marvels", img:"https://cdn.marvel.com/content/1x/marvels_imax_digital_supplemental_v3_lg.jpg" }
    ]);
    
    
    
    function booking(name){
        bookingList.value.push(name)
    }
    
    const bookingCount = ref(new Array(travelList.value.length).fill(0));
    
    function reserveTable(index) {
      bookingCount.value[index] += 1;
    }
    
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap/dist/js/bootstrap.bundle'
    
    function confirmBooking() {
        alert("ขอบคุณสำหรับการทำรายการ");
        window.location.reload();
    }
    
    </script>
    
    <style scoped>
    .bottom-button {
        padding: 10px 20px;
        background-color: hsl(349, 100%, 50%);
        color: #ffffff;
        text-decoration: none;
        border-radius: 5px;
        text-align: center;
    }
    .bottom-button:hover {
    background-color: hsl(39, 100%, 54%); 
}
    
    .main-button {
        padding: 10px 20px;
        background-color: #ff0909;
        color: #fff7f7;
        text-decoration: none;
        border-radius: 5px;
        text-align: center;
    }
  
.main-button:hover {
    background-color: #42ff7e;
}
    .container {
        margin-top:168px;
        text-align: center;
        
    }
    
    body {
        background-color: #232323;
        
    }
    
    .row {
        margin-top: 20px
    }
    footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border: 2px solid #ffffff;
  font-weight: bold;
  font-size: 15px;
  background-color: #232323;
  padding: 35px;
  flex: 1; 

}

.bottom-button {
  padding: 10px 20px;
  background-color: hsl(0, 100%, 56%);
  color: #ffffff;
  text-decoration: none;
  border-radius: 20px;
  font-size: 20px;
  width: fit-content;
  
  
}


label {
  margin-right: 15px;
  font-size: 15px;
  padding-inline: 5px;
  margin-left: 20px;
  color: #ebb916;
  padding-bottom: 40px;
}

@media (max-width: 768px) {
  footer {
    flex-direction: column;
  }

  .bottom-button {
    margin-top: 10px;
  }
}

    </style>