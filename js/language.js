
const t={
en:{aboutTitle:'About Us',productTitle:'Products',equipmentTitle:'Equipment',contactTitle:'Contact Us'},
zh:{aboutTitle:'關於我們',productTitle:'產品展示',equipmentTitle:'設備展示',contactTitle:'聯絡我們'},
tr:{aboutTitle:'Hakkımızda',productTitle:'Ürünler',equipmentTitle:'Ekipmanlar',contactTitle:'İletişim'}
};
function setLanguage(l){
for(const k in t[l]){
document.getElementById(k).innerText=t[l][k];
}
}
