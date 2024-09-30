from datetime import datetime, timedelta

import pywhatkit as kit

# Telefonnummer des Empfängers (im internationalen Format, z.B. "+491234567890")
recipient = "+testtesttest"

# Nachricht, die gesendet werden soll
message = "Hallo, das ist eine geplante Nachricht!"

# Aktuelles Datum und Uhrzeit abrufen
now = datetime.now()

# Den nächsten Donnerstag berechnen
days_until_thursday = (3 - now.weekday() + 7) % 7  # 3 entspricht Donnerstag
next_thursday = now + timedelta(days=days_until_thursday)

# Datum und Uhrzeit für 17:00 Uhr am nächsten Donnerstag setzen
scheduled_time = next_thursday.replace(
    hour=17, minute=0, second=0, microsecond=0)

# Uhrzeit für das Senden der Nachricht in Stunden und Minuten umwandeln
send_hour = scheduled_time.hour
send_minute = scheduled_time.minute

# Nachricht zu einem bestimmten Zeitpunkt senden
kit.sendwhatmsg(recipient, message, now.hour, now.minute)

print(
    f"Nachricht geplant für {scheduled_time.strftime('%A, %d %B %Y um %H:%M')}")
