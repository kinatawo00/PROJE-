# PROJE-

Basit, bağımlılık gerektirmeyen bir **görev takip** web uygulaması.

## Özellikler

- Görev ekleme, tamamlandı olarak işaretleme ve silme
- Tümü / Aktif / Tamamlanan filtreleri
- Tamamlanan görevleri tek tıkla temizleme
- Görevler tarayıcıda (`localStorage`) saklanır
- Açık ve koyu tema desteği

## Çalıştırma

`src/index.html` dosyasını tarayıcıda açmanız yeterli. Ya da yerel bir sunucuyla:

```bash
python3 -m http.server 8000 --directory src
```

Ardından <http://localhost:8000> adresine gidin.

## Dosya yapısı

```
src/
  index.html   # sayfa yapısı
  style.css    # stiller
  app.js       # uygulama mantığı
```
