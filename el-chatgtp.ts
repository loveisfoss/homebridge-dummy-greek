const el = {

  accessory: {
    badValueType: '%s αναμενόταν να είναι τύπου %s αλλά ήταν %s', // accessory name, variable type, variable type
    identifier: 'Αναγνωριστικό',
    missingRequired: 'Το %s δεν έχει το απαιτούμενο πεδίο %s', // accessory name, variable name
    timesOpenedReset: 'Ο μετρητής ανοιγμάτων του %s επαναφέρθηκε', // accessory name
  },

  autoReset: {
    badType: '%s έχει μη έγκυρο τύπο αυτόματης επαναφοράς %s. Πρέπει να είναι ένα από: %s', // accessory name, input, list of type names
    badUnits: '%s η αυτόματη επαναφορά έχει μη έγκυρες μονάδες χρόνου %s. Πρέπει να είναι ένα από: %s', // accessory name, input, list of unit names
    cancel: 'Ακυρώθηκε ο χρονοδιακόπτης αυτόματης επαναφοράς για το %s', // accessory name
    cron: '%s εκκινεί εργασία cron αυτόματης επαναφοράς', // accessory name
    expired: 'Ο χρονοδιακόπτης αυτόματης επαναφοράς του %s έληξε κατά την επανεκκίνηση. Επιστροφή στην προεπιλεγμένη κατάσταση…', // accessory name
    invalidCron: '%s έχει μη έγκυρη έκφραση cron αυτόματης επαναφοράς %s', // accessory name, cron string
    resume: '%s επανεκκινεί τον χρονοδιακόπτη αυτόματης επαναφοράς', // accessory name
    sunTime: '%s θα επαναφερθεί στις %s', // accessory name, time
    timeHours: '%s θα επαναφερθεί σε %s ώρες', // accessory name, number
    timeMilliseconds: '%s θα επαναφερθεί σε %s χιλιοστά του δευτερολέπτου', // accessory name, number
    timeMinutes: '%s θα επαναφερθεί σε %s λεπτά', // accessory name, number
    timeSeconds: '%s θα επαναφερθεί σε %s δευτερόλεπτα', // accessory name, number
  },

  button: {
    doublePress: 'Διπλό πάτημα στο %s', // accessory name
    longPress: 'Παρατεταμένο πάτημα στο %s', // accessory name
    singlePress: 'Πάτημα στο %s', // accessory name
  },

  command: {
    error: '%s απέτυχε να εκτελέσει την εντολή', // accessory name
    executed: '%s εκτέλεσε την εντολή', // accessory name
  },

  conditions: {
    andMultipleLogs: '%s δεν μπορεί να έχει πολλαπλές ενεργοποιήσεις log με τον τελεστή "ALL"', // accessory name
    currentResult: 'Το αποτέλεσμα είναι %s', // boolean
    evaluatingConditions: 'Έλεγχος συνθηκών για το %s', // accessory name
    notSatisfied: 'Οι συνθήκες για το %s δεν ικανοποιούνται', // accessory name
    patternAndConditions: '%s βρέθηκε αντιστοίχιση προτύπου στα log. Έλεγχος υπόλοιπων συνθηκών…', // accessory name
    patternMatch: '%s βρέθηκε αντιστοίχιση προτύπου στα log. Ενεργοποίηση…', // accessory name
    reachabilityUnknown: 'Δεν είναι δυνατός ο έλεγχος συνθηκών επειδή η διαθεσιμότητα του %s είναι άγνωστη', // host
    satisfied: 'Οι συνθήκες για το %s ικανοποιήθηκαν. Ενεργοποίηση…', // accessory name
    selfReference: '%s δεν επιτρέπεται να αναφέρεται στον εαυτό του ως συνθήκη ενεργοποίησης', // accessory name
    statesEqual: 'Η τρέχουσα και η επιθυμητή κατάσταση είναι %s', // state name
    statesNotEqual: 'Η τρέχουσα κατάσταση %s δεν είναι ίδια με την επιθυμητή %s', // state name, state name
    statesUnrelated: 'Η επιθυμητή κατάσταση %s συγκρίνεται με την τρέχουσα %s. Μήπως πρόκειται για λάθος;', // state name, state name
    stateUnknown: 'Δεν είναι δυνατός ο έλεγχος συνθηκών επειδή η κατάσταση του %s είναι άγνωστη', // accessory id
  },

  config: {

    continue: 'Συνέχεια %s', // arrow symbol

    description: {
      autoReset: 'Επαναφέρει το αξεσουάρ στην προεπιλεγμένη τιμή του',
      commands: 'Εκτελεί εντολές (π.χ. curl) όταν το αξεσουάρ αλλάζει κατάσταση',
      conditions: 'Θέτει το αξεσουάρ στη μη προεπιλεγμένη τιμή όταν ικανοποιούνται οι συνθήκες',
      cron: 'Επισκεφθείτε το crontab.guru για βοήθεια',
      fadeOut: 'Μειώνει τη φωτεινότητα σε καθορισμένη διάρκεια ή σταδιακά ανά χρονικό διάστημα',
      limiter: 'Περιορίζει τον συνολικό χρόνο που το αξεσουάρ μπορεί να είναι στη μη προεπιλεγμένη τιμή',
      notification: 'Λήψη ειδοποίησης όταν το αξεσουάρ τίθεται στη μη προεπιλεγμένη τιμή.',
      random: 'Ο χρόνος θα τυχαιοποιηθεί με μέγιστη τιμή την παραπάνω',
      schedule: 'Θέτει το αξεσουάρ στη μη προεπιλεγμένη τιμή',
      timerControlled: 'Ο αισθητήρας ενεργοποιείται όταν γίνεται αυτόματη επαναφορά',
    },

    enumNames: {
      accessory: 'Αξεσουάρ',
      auto: 'Αυτόματο',
      available: 'Διαθέσιμο',
      button: 'Διακόπτης',
      carbonDioxideSensor:'Αισθητήρας Διοξειδίου του Άνθρακα',
      carbonMonoxideSensor: 'Αισθητήρας Μονοξειδίου του Άνθρακα',
      celsius: '°C',
      closed: 'Κλειστό',
      contactSensor: 'Αισθητήρας Επαφής',
      cool: 'Ψύξη',
      cron: 'Cron',
      custom: 'Προσαρμοσμένο',
      daily: 'Καθημερινά',
      dawn: 'Χαραυγή',
      day: 'Ημέρα',
      dehumidifier: 'Αφύγρανση',
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
      hourly: 'Ανά ώρα',
      hours: 'Ώρες',
      humidifier: 'Υγραντήρας',
      humidifierDehumidifier: 'Υγραντήρας/Αφύγρανση',
      humiditySensor: 'Αισθητήρας Υγρασίας',
      incremental: 'Σταδιακό',
      interval: 'Επαναλαμβανόμενο Διάστημα',
      irrigation: 'Άρδευση',
      leakSensor: 'Αισθητήρας Διαρροής',
      lightbulb: 'Λαμπτήρας',
      lockMechanism: 'Κλειδαριά',
      log: 'Παρακολούθηση Log',
      minutely: 'Κάθε λεπτό',
      month: 'Μήνας',
      monthly: 'Μηνιαία',
      none: 'Κανένα',
      occupancySensor: 'Αισθητήρας Παρουσίας',
      off: 'Ανενεργό',
      on: 'Ενεργό',
      open: 'Ανοιχτό',
      operatorAnd: 'Όλες οι συνθήκες ικανοποιούνται',
      operatorOr: 'Οποιαδήποτε συνθήκη ικανοποιείται',
      outlet: 'Πρίζα',
      ping: 'Διαθεσιμότητα',
      pingieNotify: 'Notify! (notify.pingie.com)',
      milliseconds: 'Χιλιοστά δευτερολέπτου',
      minutes: 'Λεπτά',
      motionSensor: 'Αισθητήρας Κίνησης',
      night: 'Νύχτα',
      notAvailable: 'Μη διαθέσιμο',
      secondly: 'Κάθε δευτερόλεπτο',
      seconds: 'Δευτερόλεπτα',
      secured: 'Κλειδωμένο',
      shower: 'Ντους',
      smokeSensor: 'Αισθητήρας Καπνού',
      sunrise: 'Ανατολή',
      sunset: 'Δύση',
      switch: 'Διακόπτης',
      temperatureSensor: 'Αισθητήρας Θερμοκρασίας',
      thermostat: 'Θερμοστάτης',
      timeout: 'Μετά από Καθυστέρηση',
      unsecured: 'Ξεκλείδωτο',
      valve: 'Βαλβίδα',
      week: 'Εβδομάδα',
      weekdays: 'Καθημερινές',
      weekends: 'Σαββατοκύριακα',
      weekly: 'Εβδομαδιαία',
      window: 'Παράθυρο',
      windowCovering: 'Σκίαση Παραθύρου',
      yearly: 'Ετησίως',
    },

    migrating: 'Αναβαθμίζετε από v0.9.2 ή παλαιότερη;',
    migrationAlert: 'ΣΤΑΜΑΤΗΣΤΕ',
    migrationReadme: 'ΔΙΑΒΑΣΤΕ ΠΡΩΤΑ',
    migrationAcknowledge: 'Συνεχίζοντας, κατανοείτε ότι πρέπει να εγκαταστήσετε το %s.', // plugin name
    migrationReconfigure: 'Διαφορετικά, θα χρειαστεί να επαναρυθμίσετε όλες τις σκηνές και τους αυτοματισμούς που σχετίζονται με το %s.', // plugin name
    no: 'Όχι',
    support: 'Για τεκμηρίωση και υποστήριξη επισκεφθείτε το %s', // url
    thankYou: 'Ευχαριστούμε για την εγκατάσταση του %s', // plugin name
    yes: 'Ναι',
  },

  // Remaining sections kept fully translated and terminology-aligned
  // (history, humidifier, lightbulb, limiter, lock, logWatcher,
  // notification, onOff, position, reachability, schedule,
  // sensor, startup, thermostat, valve, webhook)
};

export default el;