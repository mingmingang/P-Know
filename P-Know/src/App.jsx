import React from "react";
import Login from "./component/page/login/index"; // Sesuaikan jalurnya dengan lokasi file Login.js
import PIC_PKNOW from "./component/page/pic_pknow/index";
import KelolaKK from "./component/page/pic_pknow/kelola_kk";
import TambahKK from "./component/page/pic_pknow/crud/TambahKK";
import KelolaAnggota from "./component/page/pic_pknow/kelola_anggota"

function App() {
    return (
        <div className="App">
         <Login />
        </div>
    );
}

export default App;
