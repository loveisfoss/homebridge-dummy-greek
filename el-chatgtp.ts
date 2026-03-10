const el = {

  accessory: {
    badValueType: '%s - αναμενόταν τύπος %s αλλά ήταν %s', // accessory name, variable type, variable type
    identifier: 'Αναγνωριστικό (ID)',
    missingRequired: '%s - λείπει το απαιτούμενο πεδίο %s', // accessory name, variable name
    timesOpenedReset: '%s - ο μετρητής ανοίγματος μηδενίστηκε', // accessory name
  },

  autoReset: {
    badType: '%s - έχει μη έγκυρο τύπο αυτόματης επαναφοράς %s. Πρέπει να είναι ένα από: %s', // accessory name, input, list of type names
    badUnits: '%s - η αυτόματη επαναφορά έχει μη έγκυρες μονάδες χρόνου %s. Πρέπει να είναι μία από: %s', // accessory name, input, list of unit names
    cancel: 'Ακυρώθηκε ο χρονοδιακόπτης αυτόματης επαναφοράς για %s', // accessory name
    cron: '%s - έναρξη εργασίας αυτόματης επαναφοράς cron', // accessory name
    expired: '%s - ο χρονοδιακόπτης αυτόματης επαναφοράς έληξε κατά την επανεκκίνηση. Επιστροφή στην προεπιλεγμένη κατάσταση…', // accessory name
    invalidCron: '%s - η αυτόματη επαναφορά έχει μη έγκυρη έκφραση cron %s', // accessory name, cron string
    resume: '%s - επανεκκίνηση χρονοδιακόπτη αυτόματης επαναφοράς', // accessory name
    sunTime: '%s - θα επαναφερθεί στις %s', // accessory name, time
    timeHours: '%s - θα επαναφερθεί σε %s ώρες', // accessory name, number
    timeMilliseconds: '%s - θα επαναφερθεί σε %s χιλιοστά του δευτερολέπτου', // accessory name, number
    timeMinutes: '%s - θα επαναφερθεί σε %s λεπτά', // accessory name, number
    timeSeconds: '%s - θα επαναφερθεί σε %s δευτερόλεπτα', // accessory name, number
  },

  button: {
    doublePress: '%s - πατήθηκε δύο φορές', // accessory name
    longPress: '%s - πατήθηκε παρατεταμένα', // accessory name
    singlePress: '%s - πατήθηκε μία φορά', // accessory name
  },

  command: {
    error: '%s - απέτυχε η εκτέλεση της εντολής', // accessory name
    executed: '%s - η εντολή εκτελέστηκε', // accessory name
  },

  conditions: {
    andMultipleLogs: '%s - δεν επιτρέπονται πολλαπλά triggers καταγραφής με τη χρήση του τελεστή "ALL"', // accessory name
    currentResult: 'Το τρέχον αποτέλεσμα είναι %s', // boolean
    evaluatingConditions: 'Αξιολόγηση συνθηκών για %s', // accessory name
    notSatisfied: '%s - οι συνθήκες δεν ικανοποιούνται', // accessory name
    patternAndConditions: '%s - βρέθηκε αντιστοιχία μοτίβου στην καταγραφή. Έλεγχος λοιπών συνθηκών…', // accessory name
    patternMatch: '%s - βρέθηκε αντιστοιχία μοτίβου στην καταγραφή. Ενεργοποίηση…', // accessory name
    reachabilityUnknown: 'Αδυναμία αξιολόγησης συνθηκών καθώς η προσβασιμότητα για %s είναι άγνωστη', // host
    satisfied: '%s - οι συνθήκες ικανοποιήθηκαν. Ενεργοποίηση…', // accessory name
    selfReference: '%s - δεν επιτρέπεται να αναφέρεται στον εαυτό του ως συνθήκη ενεργοποίησης', // accessory name
    statesEqual: 'Η τρέχουσα και η επιθυμητή κατάσταση είναι και οι δύο %s', // state name
    statesNotEqual: 'Η τρέχουσα κατάσταση %s δεν είναι ισοδύναμη με την επιθυμητή κατάσταση %s', // state name, state name
    statesUnrelated: 'Η επιθυμητή κατάσταση συνθήκης %s συγκρίνεται με την τρέχουσα κατάσταση %s. Μήπως πρόκειται για τυπογραφικό λάθος;', // state name, state name
    stateUnknown: 'Αδυναμία αξιολόγησης συνθηκών καθώς η κατάσταση για %s είναι άγνωστη', // accessory id
  },

  config: {

    continue: 'Συνέχεια %s', // arrow symbol

    description: {
      autoReset: 'Επαναφέρει το αξεσουάρ στην προεπιλεγμένη του τιμή',
      commands: 'Εκτέλεση αυθαίρετων εντολών (π.χ. curl) όταν το αξεσουάρ αλλάζει κατάσταση',
      conditions: 'Θέτει το αξεσουάρ στην αντίθετη (μη προεπιλεγμένη) τιμή του όταν πληρούνται οι καθορισμένες συνθήκες',
      cron: 'Επισκεφθείτε το crontab.guru για βοήθεια',
      fadeOut: 'Μείωση φωτεινότητας σε μια σταθερή διάρκεια, ή μείωση κατά 1% σταδιακά ανά χρονική διάρκεια',
      limiter: 'Περιορισμός του συνολικού χρόνου που αυτό το αξεσουάρ μπορεί να βρίσκεται στη μη προεπιλεγμένη τιμή του, για κάθε καθορισμένη περίοδο',
      notification: 'Λήψη ειδοποίησης όταν το αξεσουάρ τίθεται στην αντίθετη (μη προεπιλεγμένη) τιμή του. Δείτε το wiki για βοήθεια.',
      random: 'Ο χρόνος θα επιλεγεί τυχαία με την παραπάνω τιμή ως μέγιστο',
      schedule: 'Θέτει το αξεσουάρ στην αντίθετη (μη προεπιλεγμένη) τιμή του',
      timerControlled: 'Αντί για αντικατοπτρισμό του αξεσουάρ, ο αισθητήρας θα ενεργοποιείται όταν το αξεσουάρ κάνει αυτόματη επαναφορά',
    },

    enumNames: {
      accessory: 'Αξεσουάρ',
      auto: 'Αυτόματο',
      available: 'Διαθέσιμο',
      button: 'Διακόπτης χωρίς κατάσταση (Stateless)',
      carbonDioxideSensor:'Διοξείδιο του Άνθρακα',
      carbonMonoxideSensor: 'Μονοξείδιο του Άνθρακα',
      celsius: '°C',
      closed: 'Κλειστό',
      contactSensor: 'Επαφή',
      cool: 'Ψύξη',
      cron: 'Cron',
      custom: 'Προσαρμοσμένο',
      daily: 'Καθημερινά',
      dawn: 'Χάραμα',
      day: 'Ημέρα',
      dehumidifier: 'Αφυγραντήρας',
      door: 'Πόρτα',
      dusk: 'Σούρουπο',
      fahrenheit: '°F',
      faucet: 'Βρύση',
      fixed: 'Σταθερό',
      garageDoorOpener: 'Γκαραζόπορτα',
      generic: 'Γενικό',
      goldenHour: 'Χρυσή Ώρα',
      heat: 'Θέρμανση',
      hour: 'Ώρα',
      hourly: 'Κάθε ώρα',
      hours: 'Ώρες',
      humidifier: 'Υγραντήρας',
      humidifierDehumidifier: 'Υγραντήρας/Αφυγραντήρας',
      humiditySensor: 'Αισθητήρας Υγρασίας',
      incremental: 'Σταδιακά',
      interval: 'Επαναλαμβανόμενο Διάστημα',
      irrigation: 'Πότισμα',
      leakSensor: 'Διαρροή',
      lightbulb: 'Λάμπα',
      lockMechanism: 'Κλειδαριά',
      log: 'Παρακολούθηση Καταγραφής (Log)',
      minutely: 'Κάθε λεπτό',
      month: 'Μήνας',
      monthly: 'Μηνιαία',
      none: 'Κανένα',
      occupancySensor: 'Αισθητήρας Παρουσίας',
      off: 'Ανενεργό (Off)',
      on: 'Ενεργό (On)',
      open: 'Ανοιχτό',
      operatorAnd: 'ΟΛΕΣ οι συνθήκες πληρούνται', // proceeded by "Trigger when…"
      operatorOr: 'ΟΠΟΙΑΔΗΠΟΤΕ συνθήκη πληρούται', // proceeded by "Trigger when…"
      outlet: 'Πρίζα',
      ping: 'Προσβασιμότητα',
      pingieNotify: 'Notify! (notify.pingie.com)',
      milliseconds: 'Χιλιοστά του δευτερολέπτου',
      minutes: 'Λεπτά',
      motionSensor: 'Κίνηση',
      night: 'Νύχτα',
      notAvailable: 'Μη διαθέσιμο',
      secondly: 'Κάθε δευτερόλεπτο',
      seconds: 'Δευτερόλεπτα',
      secured: 'Κλειδωμένο',
      shower: 'Ντους',
      smokeSensor: 'Καπνός',
      sunrise: 'Ανατολή ηλίου',
      sunset: 'Δύση ηλίου',
      switch: 'Διακόπτης',
      temperatureSensor: 'Αισθητήρας Θερμοκρασίας',
      thermostat: 'Θερμοστάτης',
      timeout: 'Μετά από καθυστέρηση',
      unsecured: 'Ξεκλείδωτο',
      valve: 'Βαλβίδα',
      week: 'Εβδομάδα',
      weekdays: 'Καθημερινές',
      weekends: 'Σαββατοκύριακα',
      weekly: 'Εβδομαδιαία',
      window: 'Παράθυρο',
      windowCovering: 'Κάλυμμα Παραθύρου (Στόρια)',
      yearly: 'Ετήσια',
    },

    migrating: 'Κάνετε αναβάθμιση από την έκδοση v0.9.2 ή παλαιότερη;',
    migrationAlert: 'ΣΤΑΣΗ',
    migrationReadme: 'ΔΙΑΒΑΣΤΕ ΑΥΤΟ ΠΡΩΤΑ',
    migrationAcknowledge: 'Συνεχίζοντας, κατανοείτε ότι πρέπει να εγκαταστήσετε το %s.', // plugin name
    migrationReconfigure: 'Διαφορετικά, θα χρειαστεί να ρυθμίσετε ξανά όλες τις σκηνές και τους αυτοματισμούς HomeKit που σχετίζονται με το %s.', // plugin name
    no: 'Όχι',
    support: 'Για τεκμηρίωση και υποστήριξη παρακαλούμε επισκεφθείτε το %s', // url
    thankYou: 'Σας ευχαριστούμε που εγκαταστήσατε το %s', // plugin name

    title: {
      accessory: 'Αξεσουάρ',
      accessoryState: 'Κατάσταση',
      api: 'API',
      autoReset: 'Αυτόματη Επαναφορά',
      commandClose: 'Εντολή Κλεισίματος',
      commandHumidity: 'Εντολή Αλλαγής Υγρασίας',
      commandOff: 'Εντολή Απενεργοποίησης (Off)',
      commandOn: 'Εντολή Ενεργοποίησης (On)',
      commandOpen: 'Εντολή Ανοίγματος',
      commandLock: 'Εντολή Κλειδώματος',
      commands: 'Εντολές',
      commandTemperature: 'Εντολή Αλλαγής Θερμοκρασίας',
      commandUnlock: 'Εντολή Ξεκλειδώματος',
      condition: 'Συνθήκη',
      conditions: 'Συνθήκες Ενεργοποίησης',
      cron: 'Cron',
      cronCustom: 'Προσαρμοσμένο Cron',
      defaultPosition: 'Προεπιλεγμένη Θέση',
      defaultState: 'Προεπιλεγμένη Κατάσταση',
      defaultTemperature: 'Προεπιλεγμένη Θερμοκρασία',
      disableLogging: 'Απενεργοποίηση Καταγραφής',
      enableHistory: 'Ενεργοποίηση Ιστορικού',
      enableWebhook: 'Ενεργοποίηση Webhook',
      fadeOut: 'Fade Out',
      groupName: 'Όνομα Ομάδας',
      humidifierType: 'Τύπος',
      interval: 'Διάστημα',
      isDimmer: 'Ενεργοποίηση Φωτεινότητας',
      latitude: 'Γεωγραφικό Πλάτος',
      limit: 'Όριο',
      limiter: 'Χρονικό Όριο',
      longitude: 'Γεωγραφικό Μήκος',
      maximumTemperature: 'Μέγιστη Θερμοκρασία',
      minimumTemperature: 'Ελάχιστη Θερμοκρασία',
      name: 'Όνομα',
      notification: 'Ειδοποίηση',
      offset: 'Απόκλιση (Offset)',
      operator: 'Ενεργοποίηση όταν…',
      pattern: 'Συμβολοσειρά αναζήτησης ή RegEx',
      period: 'Ανά',
      pingAvailability: 'Κατάσταση',
      pingHost: 'Host',
      pingInterval: 'Διάστημα',
      pushId: 'ID Συσκευής ή Ομάδας',
      pushText: 'Κείμενο',
      pushTitle: 'Τίτλος (Προαιρετικό)',
      pushToken: 'Token',
      preset: 'Προεπιλογή',
      random: 'Τυχαία επιλογή',
      resetOnRestart: 'Επαναφορά κατά την Επανεκκίνηση',
      schedule: 'Πρόγραμμα',
      sensor: 'Σύνδεση Αισθητήρα',
      simulateOpenClose: 'Προσομοίωση Ανοίγματος/Κλεισίματος',
      temperatureUnits: 'Μονάδες Θερμοκρασίας',
      time: 'Ώρα',
      timerControlled: 'Ενεργοποίηση Αισθητήρα στην Αυτόματη Επαναφορά',
      type: 'Τύπος',
      units: 'Μονάδες',
      valveType: 'Τύπος Βαλβίδας',
    },

    yes: 'Ναι',
  },

  history: {
    cleanup: 'Καθαρισμός ιστορικού για %s', // accessory name
    cleanupFailed: 'Αδυναμία αφαίρεσης ιστορικού για %s. Δοκιμάστε να αφαιρέσετε χειροκίνητα το αρχείο %s από τον κατάλογο \'persist\' του Homebridge.', // accessory name, filename
  },

  humidifier: {
    badType: '%s - έχει μη έγκυρο τύπο υγραντήρα %s. Πρέπει να είναι ένα από: %s', // accessory name, input, list of type names
    targetHumidity: '%s - η υγρασία ορίστηκε στο %d%', // accessory name, number
  },

  lightbulb: {
    brightness: '%s - η φωτεινότητα είναι %d%', // accessory name, number
    fadeHours: '%s - fade out σε %s ώρες', // accessory name, number
    fadeMilliseconds: '%s - fade out σε %s χιλιοστά του δευτερολέπτου', // accessory name, number
    fadeMinutes: '%s - fade out σε %s λεπτά', // accessory name, number
    fadeSeconds: '%s - fade out σε %s δευτερόλεπτα', // accessory name, number
    stateOn: '%s - είναι ενεργό, η φωτεινότητα είναι %d%', // accessory name, number
  },

  limiter: {
    badPeriod: 'Το χρονικό όριο για %s έχει μη έγκυρη περίοδο %s. Πρέπει να είναι μία από: %s', // accessory name, input, list of unit names
    badUnits: 'Το χρονικό όριο για %s έχει μη έγκυρες μονάδες %s. Πρέπει να είναι μία από: %s', // accessory name, input, list of unit names
    expired: 'Το χρονικό όριο για %s έχει λήξει', // accessory name
    limitExceedsPeriod: 'Το χρονικό όριο για %s υπερβαίνει την περίοδο. Παρακαλούμε μειώστε το όριο ή αυξήστε την περίοδο.', // accessory name
    remainingDayPlus: 'Το χρονικό όριο για %s έχει απομένουσες πάνω από μία ημέρα', // accessory name
    remainingHours: 'Το χρονικό όριο για %s έχει %s ώρες που απομένουν', // accessory name, number
    remainingMinutes: 'Το χρονικό όριο για %s έχει %s λεπτά που απομένουν', // accessory name, number
    remainingSeconds: 'Το χρονικό όριο για %s έχει %s δευτερόλεπτα που απομένουν', // accessory name, number
  },

  lock: {
    badDefault: '%s - έχει μη έγκυρη προεπιλεγμένη κατάσταση κλειδώματος %s. Πρέπει να είναι μία από: %s', // accessory name, input, list of state names
    secured: '%s - είναι κλειδωμένο', // accessory name
    unsecured: '%s - είναι ξεκλείδωτο', // accessory name
  },

  logWatcher: {
    error: 'Ο επόπτης καταγραφής συνάντησε ένα σφάλμα: %s', // error
    missingFile: 'Αδυναμία εύρεσης αρχείου καταγραφής στη διαδρομή %s', // file path
  },

  notification: {
    badAPI: '%s - έχει μη έγκυρο api %s. Πρέπει να είναι ένα από: %s', // accessory name, input, list of APIs
    pushError: '%s - αδυναμία αποστολής ειδοποίησης push', // accessory name
    pushSuccess: '%s - η ειδοποίηση push στάλθηκε', // accessory name
  },

  onOff: {
    badDefault: '%s - έχει μη έγκυρη προεπιλεγμένη κατάσταση λειτουργίας %s. Πρέπει να είναι μία από: %s', // accessory name, input, list of state names
    stateOff: '%s - είναι ανενεργό', // accessory name
    stateOn: '%s - είναι ενεργό', // accessory name
  },

  position: {
    badDefault: '%s - έχει μη έγκυρη προεπιλεγμένη θέση %s. Πρέπει να είναι μία από: %s', // accessory name, input, list of position names
    closed: '%s - είναι κλειστό', // accessory name
    open: '%s - είναι ανοιχτό', // accessory name
  },

  reachability: {
    error: 'Παρουσιάστηκε σφάλμα κατά τον έλεγχο προσβασιμότητας του %s', // host
    reachable: '%s - αποκρίνεται', // host
    unreachable: '%s - δεν αποκρίνεται', // host
  },

  schedule: {
    badType: '%s - έχει μη έγκυρο τύπο προγράμματος %s. Πρέπει να είναι ένα από: %s', // accessory name, input, list of type names
    badUnits: '%s - το πρόγραμμα έχει μη έγκυρες μονάδες χρόνου %s. Πρέπει να είναι μία από: %s', // accessory name, input, list of unit names
    cancel: 'Ακυρώθηκε ο χρονοδιακόπτης προγράμματος για %s', // accessory name
    cron: '%s - έναρξη εργασίας cron προγράμματος', // accessory name
    expired: '%s - ο χρονοδιακόπτης προγράμματος έληξε κατά την επανεκκίνηση. Μετάβαση σε μη προεπιλεγμένη κατάσταση…', // accessory name
    invalidCron: '%s - το πρόγραμμα έχει μη έγκυρη έκφραση cron %s', // accessory name, cron string
    resume: '%s - επανεκκίνηση χρονοδιακόπτη προγράμματος', // accessory name
    sunTime: '%s - θα ενεργοποιηθεί στις %s', // accessory name, time
    timeHours: '%s - θα ενεργοποιηθεί σε %s ώρες', // accessory name, number
    timeMilliseconds: '%s - θα ενεργοποιηθεί σε %s χιλιοστά του δευτερολέπτου', // accessory name, number
    timeMinutes: '%s - θα ενεργοποιηθεί σε %s λεπτά', // accessory name, number
    timeSeconds: '%s - θα ενεργοποιηθεί σε %s δευτερόλεπτα', // accessory name, number
  },

  sensor: {

    badTemperatureUnits: '%s - έχει μη έγκυρες μονάδες θερμοκρασίας %s. Πρέπει να είναι μία από: %s', // accessory name, input, list of unit names
    badType: '%s - έχει μη έγκυρο τύπο αισθητήρα %s. Πρέπει να είναι ένα από: %s', // accessory name, input, list of type names

    carbonDioxide: {
      active: '%s - ανιχνεύθηκε διοξείδιο του άνθρακα', // accessory name
      inactive: '%s - σταμάτησε η ανίχνευση διοξειδίου του άνθρακα', // accessory name
    },

    carbonMonoxide: {
      active: '%s - ανιχνεύθηκε μονοξείδιο του άνθρακα', // accessory name
      inactive: '%s - σταμάτησε η ανίχνευση μονοξειδίου του άνθρακα', // accessory name
    },

    contact: {
      active: '%s - σταμάτησε η ανίχνευση επαφής', // accessory name
      inactive: '%s - ανιχνεύθηκε επαφή', // accessory name
    },

    humidity: '%s - η υγρασία είναι %d%', // accessory name, number

    leak: {
      active: '%s - ανιχνεύθηκε διαρροή', // accessory name
      inactive: '%s - σταμάτησε η ανίχνευση διαρροής', // accessory name
    },

    motion: {
      active: '%s - ανιχνεύθηκε κίνηση', // accessory name
      inactive: '%s - σταμάτησε η ανίχνευση κίνησης', // accessory name
    },

    occupancy: {
      active: '%s - ανιχνεύθηκε παρουσία', // accessory name
      inactive: '%s - σταμάτησε η ανίχνευση παρουσίας', // accessory name
    },

    smoke: {
      active: '%s - ανιχνεύθηκε καπνός', // accessory name
      inactive: '%s - σταμάτησε η ανίχνευση καπνού', // accessory name
    },

    temperatureC: '%s - η θερμοκρασία είναι %d°C', // accessory name, number
    temperatureF: '%s - η θερμοκρασία είναι %d°F', // accessory name, number
  },

  startup: {
    newAccessory: 'Προσθήκη νέου αξεσουάρ:',
    removeAccessory: 'Αφαίρεση αξεσουάρ:',
    restoringAccessory: 'Επαναφορά αξεσουάρ:',
    setupComplete: '✓ Η εγκατάσταση ολοκληρώθηκε',
    unsupportedType: 'Μη υποστηριζόμενος τύπος αξεσουάρ %s', // accessory type
    welcome: [
      'Παρακαλούμε βαθμολογήστε με ★ αυτό το πρόσθετο στο GitHub αν το βρίσκετε χρήσιμο! https://github.com/mpatfield/homebridge-dummy',
      'Θα θέλατε να υποστηρίξετε αυτό το πρόσθετο; https://github.com/sponsors/mpatfield',
      'Θέλετε να δείτε αυτό το πρόσθετο στη δική σας γλώσσα; Παρακαλούμε επισκεφθείτε τη διεύθυνση https://github.com/mpatfield/homebridge-dummy/issues/105',
    ],
  },

  thermostat: {
    auto: '%s - ορίστηκε σε Αυτόματο', // accessory name
    badDefault: '%s - έχει μη έγκυρη προεπιλεγμένη κατάσταση %s. Πρέπει να είναι μία από: %s', // accessory name, input, list of state names
    badValidStates: '%s - έχει μη έγκυρη τιμή στο %s. Πρέπει να είναι μία από: %s', // accessory name, variable name, list of state names
    badValidStatesType: '%s - αναμένεται ένας πίνακας (array) για το %s', // accessory name, variable name
    cool: '%s - ορίστηκε σε Ψύξη', // accessory name
    heat: '%s - ορίστηκε σε Θέρμανση', // accessory name
    off: '%s - ορίστηκε σε Ανενεργό (Off)', // accessory name
    targetC: '%s - ορίστηκε στους %d°C', // accessory name, number
    targetF: '%s - ορίστηκε στους %d°F', // accessory name, number
  },

  valve: {
    badType: '%s - έχει μη έγκυρο τύπο βαλβίδας %s. Πρέπει να είναι ένας από: %s', // accessory name, input, list of type names
    maxDuration: '%s - η καθυστέρηση αυτόματης επαναφοράς δεν μπορεί να υπερβαίνει τη 1 ώρα', // accessory name
    minDuration: '%s - η καθυστέρηση αυτόματης επαναφοράς δεν μπορεί να είναι μικρότερη από 1 δευτερόλεπτο', // accessory name
  },

  webhook: {
    badPort: 'Η θύρα (port) για τον διακομιστή webhook πρέπει να είναι αριθμός. Επιστροφή στην προεπιλογή %d', // number
    badSSL: 'Αποτυχία φόρτωσης διαπιστευτηρίων SSL. Επιστροφή σε http…',
    badSSLParameter: 'Η παράμετρος SSL %s θα έπρεπε να είναι %s, αλλά ήταν %s', // parameter name, type, type
    badUnits: 'Η εντολή webhook %s έχει μη έγκυρες μονάδες θερμοκρασίας %s. Πρέπει να είναι μία από:', // accessory name, input, list of unit names
    command: 'Εντολή',
    example: 'Παράδειγμα',
    link: 'Σύνδεσμος',
    missingCharacteristic: 'Λείπει εντολή get ή set από το αίτημα, π.χ. `set=Brightness`',
    missingId: 'Λείπει το id από το αίτημα',
    missingValue: 'Τα αιτήματα `set` απαιτούν μια τιμή (`value`)',
    received: 'Λήφθηκε εντολή Webhook',
    register: '%s - προσθήκη webhook με id %s και εντολή %s', // accessory name, id, command
    started: 'Ο διακομιστής Webhook ακούει στη θύρα %s', // port number
    stopped: 'Ο διακομιστής Webhook σταμάτησε',
    stopping: 'Τερματισμός διακομιστή Webhook…',
    title: 'Διαθέσιμα Webhooks',
    validRange: 'Η εντολή webhook %s αναμένει μια αριθμητική τιμή μεταξύ %s και %s', // command name, number, number
    validValues: 'Οι έγκυρες τιμές για την εντολή webhook %s είναι:', // command name
    values: 'Τιμές',
    unregisteredCharacteristic: 'Δεν υπάρχουν εγγεγραμμένα αξεσουάρ για το %s. Μήπως ξεχάσατε να κάνετε `Enable Webhook` για αυτό το αξεσουάρ;', // command name
    unregisteredId: 'Δεν υπάρχει αξεσουάρ εγγεγραμμένο για webhooks με το id %s. Μπορείτε να βρείτε το σωστό id στη ρύθμιση JSON.', // id
    unsupportedCharacteristic: 'Η εντολή webhook %s δεν υποστηρίζεται', // value
  },
};

export default el;
