## Google Sheets Integration (Asaan Guide)

Yeh guide 10th class ka baccha bhi follow kar sake. Sirf “Get Your Free Digital Growth Plan” (Assessment) wala form ka data Google Sheet me jayega.

---

### Aapko kya chahiye
- Google Account
- Aapka Google Sheet (ID already set hai)
- Internet

---

### Step 1: Google Apps Script Deploy karo
1. Browser me yeh link kholo: `https://script.google.com`
2. Apna woh project open karo jisme aapne code paste kiya tha.
   - Code yahi file se copy kiya tha: `google-apps-script-code.js`
   - Aapne SHEET_ID already set kar diya hai. Good!
3. Top-right me “Deploy” button dabao.
4. “New deployment” choose karo.
5. Type me “Web app” select karo.
6. Settings set karo:
   - Execute as: Me
   - Who has access: Anyone
7. “Deploy” dabao aur permissions allow karo (2-3 baar aa sakta hai).
8. Jo URL milega usse copy kar lo. Example:
```
https://script.google.com/macros/s/AKfycbz.../exec
```

---

### Step 2: Website me URL paste karo
1. Project me yeh file kholo: `app/utils/googleSheets.js`
2. Is line ko dhoondo aur apna URL daalo:
```javascript
WEB_APP_URL: 'YAHAN_APNA_WEB_APP_URL_PASTE_KARO',
```
3. File save karo.

Bas config ho gaya.

---

### Step 3: Test kaise karein
1. Apni website kholo.
2. “Get Your Free Digital Growth Plan” (ya “Get Free Assessment”) form bhar do:
   - Business Name
   - Email
   - Website URL
   - Phone
3. Submit dabao.
4. Ab Google Sheet kholo.
   - Aapko nayi row dikhegi 5 columns ke saath:
     - Timestamp
     - Business Name
     - Email
     - Website URL
     - Phone

Note: Contact form ka data Google Sheet me nahi jayega. Sirf yeh “Digital Growth Plan/Assessment” form jayega.

---

### Agar kaam na kare to kya check karein
- Kya aapne Apps Script ko “Web app” ke taur pe deploy kiya?
- “Who has access” = Anyone set kiya?
- URL sahi se `WEB_APP_URL` me paste kiya?
- Form submit karte waqt internet tha?
- Browser ke Console (F12) me error aa raha hai to mujhe bhej do.

---

### F.A.Q.
- Q: Contact form ka data kyu nahi ja raha?
  - A: Hamne code aisa set kiya hai ki sirf Assessment form ka data jaye. Ye aapki requirement ke hisaab se hai.
- Q: Columns alag kyu hai?
  - A: Sirf 5 fields rakhhe gaye: Timestamp, Business Name, Email, Website URL, Phone – taki sheet clean rahe.

---

### Quick Checklist
- [ ] Apps Script Web App deploy kiya
- [ ] Web App URL copy kiya
- [ ] `app/utils/googleSheets.js` me URL paste kiya
- [ ] Assessment form submit kiya
- [ ] Google Sheet me data aaya

Ho gaya! Ab aapka “Digital Growth Plan” form direct Google Sheet me save karta hai. 👍
