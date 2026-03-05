const el = {

  accessory: {
    badValueType: '%s – αναμενόταν να είναι τύπου %s αλλά ήταν %s', // accessory name, variable type, variable type
    identifier: 'Αναγνωριστικό',
    missingRequired: '%s – λείπει το απαιτούμενο πεδίο %s', // accessory name, variable name
    timesOpenedReset: '%s – ο μετρητής ανοίγματος επαναφέρθηκε', // accessory name
  },

  autoReset: {
    badType: '%s – μη έγκυρος τύπος auto-reset %s. Πρέπει να είναι ένας από: %s', // accessory name, input, list of type names
    badUnits: '%s – μη έγκυρες μονάδες χρόνου auto-reset %s. Πρέπει να είναι μία από: %s', // accessory name, input, list of unit names
    cancel: 'Ακυρώθηκε ο χρονοδιακόπτης auto-reset για %s', // accessory name
    cron: '%s – εκκίνηση cron εργασίας auto-reset', // accessory name
    expired: '%s – ο χρονοδιακόπτης auto-reset έληξε κατά την επανεκκίνηση. Επιστροφή στην προεπιλεγμένη κατάσταση…', // accessory name
    invalidCron: '%s – μη έγκυρη έκφραση cron %s', // accessory name, cron string
    resume: '%s – συνέχιση χρονοδιακόπτη auto-reset', // accessory name
    sunTime: '%s – θα επαναφερθεί στις %s', // accessory name, time
    timeHours: '%s – θα επαναφερθεί σε %s ώρες', // accessory name, number
    timeMilliseconds: '%s – θα επαναφερθεί σε %s milliseconds', // accessory name, number
    timeMinutes: '%s – θα επαναφερθεί σε %s λεπτά', // accessory name, number
    timeSeconds: '%s – θα επαναφερθεί σε %s δευτερόλεπτα', // accessory name, number
  },

  button: {
    doublePress: '%s – διπλό πάτημα', // accessory name
    longPress: '%s – παρατεταμένο πάτημα', // accessory name
    singlePress: '%s – μονό πάτημα', // accessory name
  },

  command: {
    error: '%s – αποτυχία εκτέλεσης εντολής', // accessory name
    executed: '%s – εκτελέστηκε εντολή', // accessory name
  },

  conditions: {
    andMultipleLogs: '%s – δεν επιτρέπονται πολλαπλά log triggers με τον τελεστή "ALL"', // accessory name
    currentResult: 'Το τρέχον αποτέλεσμα είναι %s', // boolean
    evaluatingConditions: 'Έλεγχος συνθηκών για %s', // accessory name
    notSatisfied: '%s – οι συνθήκες δεν ικανοποιούνται', // accessory name
    patternAndConditions: '%s – βρέθηκε αντιστοίχιση μοτίβου στο log. Έλεγχος υπόλοιπων συνθηκών…', // accessory name
    patternMatch: '%s – βρέθηκε αντιστοίχιση μοτίβου στο log. Ενεργοποίηση…', // accessory name
    reachabilityUnknown: 'Δεν είναι ακόμη δυνατός ο έλεγχος συνθηκών επειδή η διαθεσιμότητα για %s είναι άγνωστη', // host
    satisfied: '%s – οι συνθήκες ικανοποιήθηκαν. Ενεργοποίηση…', // accessory name
    selfReference: '%s – δεν επιτρέπεται να χρησιμοποιεί τον εαυτό του ως συνθήκη ενεργοποίησης', // accessory name
    statesEqual: 'Η τρέχουσα και η επιθυμητή κατάσταση είναι και οι δύο %s', // state name
    statesNotEqual: 'Η τρέχουσα κατάσταση %s δεν είναι ίδια με την επιθυμητή κατάσταση %s', // state name
    statesUnrelated: 'Η επιθυμητή κατάσταση %s συγκρίνεται με την τρέχουσα %s. Μήπως είναι λάθος;', // state name
    stateUnknown: 'Δεν είναι ακόμη δυνατός ο έλεγχος συνθηκών επειδή η κατάσταση για %s είναι άγνωστη', // accessory id
  },

  config: {

    continue: 'Συνέχεια %s',

    description: {
      autoReset: 'Επιστρέφει τη συσκευή στην προεπιλεγμένη τιμή',
      commands: 'Εκτέλεση εντολών (π.χ. curl) όταν αλλάζει η κατάσταση',
      conditions: 'Θέτει τη συσκευή στην αντίθετη (μη προεπιλεγμένη) κατάσταση όταν ικανοποιούνται οι συνθήκες',
      cron: 'Επισκεφθείτε το crontab.guru για βοήθεια',
      fadeOut: 'Μειώνει τη φωτεινότητα σε συγκεκριμένο χρόνο',
      limiter: 'Περιορίζει το συνολικό χρόνο που μπορεί να είναι ενεργή',
      notification: 'Λήψη ειδοποίησης όταν η συσκευή αλλάζει κατάσταση',
      random: 'Ο χρόνος θα τυχαιοποιηθεί έως τη μέγιστη τιμή',
      schedule: 'Θέτει τη συσκευή στην αντίθετη κατάσταση',
      timerControlled: 'Ο αισθητήρας ενεργοποιείται όταν γίνει auto-reset',
    },

    enumNames: {
      accessory: 'Συσκευή',
      auto: 'Αυτόματο',
      available: 'Διαθέσιμο',
      button: 'Διακόπτης',
      carbonDioxideSensor:'Διοξείδιο του άνθρακα',
      carbonMonoxideSensor: 'Μονοξείδιο του άνθρακα',
      celsius: '°C',
      closed: 'Κλειστό',
      contactSensor: 'Επαφή',
      cool: 'Ψύξη',
      cron: 'Cron',
      custom: 'Προσαρμοσμένο',
      daily: 'Καθημερινά',
      dawn: 'Αυγή',
      day: 'Ημέρα',
      dehumidifier: 'Αφυγραντήρας',
      door: 'Πόρτα',
      dusk: 'Σούρουπο',
      fahrenheit: '°F',
      faucet: 'Βρύση',
      fixed: 'Σταθερό',
      garageDoorOpener: 'Γκαραζόπορτα',
      generic: 'Γενικό',
      goldenHour: 'Golden Hour',
      heat: 'Θέρμανση',
      hour: 'Ώρα',
      hourly: 'Ανά ώρα',
      hours: 'Ώρες',
      humidifier: 'Υγραντήρας',
      humidifierDehumidifier: 'Υγραντήρας/Αφυγραντήρας',
      humiditySensor: 'Αισθητήρας υγρασίας',
      incremental: 'Σταδιακό',
      interval: 'Επαναλαμβανόμενο διάστημα',
      irrigation: 'Άρδευση',
      leakSensor: 'Διαρροή',
      lightbulb: 'Λάμπα',
      lockMechanism: 'Κλειδαριά',
      log: 'Παρακολούθηση Log',
      minutely: 'Κάθε λεπτό',
      month: 'Μήνας',
      monthly: 'Μηνιαία',
      none: 'Καμία',
      occupancySensor: 'Παρουσία',
      off: 'Ανενεργό',
      on: 'Ενεργό',
      open: 'Ανοιχτό',
      operatorAnd: 'ΟΛΕΣ οι συνθήκες',
      operatorOr: 'ΟΠΟΙΑΔΗΠΟΤΕ συνθήκη',
      outlet: 'Πρίζα',
      ping: 'Διαθεσιμότητα',
      milliseconds: 'Milliseconds',
      minutes: 'Λεπτά',
      motionSensor: 'Κίνηση',
      night: 'Νύχτα',
      notAvailable: 'Μη διαθέσιμο',
      secondly: 'Κάθε δευτερόλεπτο',
      seconds: 'Δευτερόλεπτα',
      secured: 'Κλειδωμένο',
      shower: 'Ντους',
      smokeSensor: 'Καπνός',
      sunrise: 'Ανατολή',
      sunset: 'Δύση',
      switch: 'Διακόπτης',
      temperatureSensor: 'Αισθητήρας θερμοκρασίας',
      thermostat: 'Θερμοστάτης',
      timeout: 'Μετά από καθυστέρηση',
      unsecured: 'Ξεκλείδωτο',
      valve: 'Βαλβίδα',
      week: 'Εβδομάδα',
      weekdays: 'Καθημερινές',
      weekends: 'Σαββατοκύριακα',
      weekly: 'Εβδομαδιαία',
      window: 'Παράθυρο',
      windowCovering: 'Ρολό / Στόρια',
      yearly: 'Ετησίως',
    },

    migrating: 'Κάνετε αναβάθμιση από v0.9.2 ή παλαιότερη;',
    migrationAlert: 'ΣΤΑΜΑΤΗΣΤΕ',
    migrationReadme: 'ΔΙΑΒΑΣΤΕ ΠΡΩΤΑ',
    migrationAcknowledge: 'Συνεχίζοντας κατανοείτε ότι πρέπει να εγκαταστήσετε το %s.',
    migrationReconfigure: 'Διαφορετικά θα πρέπει να ρυθμίσετε ξανά όλα τα HomeKit scenes και automations για το %s.',
    no: 'Όχι',
    support: 'Για τεκμηρίωση και υποστήριξη επισκεφθείτε %s',
    thankYou: 'Ευχαριστούμε που εγκαταστήσατε το %s',

    yes: 'Ναι',
  },

  history: {
    cleanup: 'Διαγραφή ιστορικού για %s',
    cleanupFailed: 'Αδυναμία διαγραφής ιστορικού για %s. Δοκιμάστε να διαγράψετε χειροκίνητα το αρχείο %s από τον φάκελο persist του Homebridge.',
  },

  humidifier: {
    badType: '%s – μη έγκυρος τύπος υγραντήρα %s. Πρέπει να είναι ένας από: %s',
    targetHumidity: '%s – η υγρασία ορίστηκε στο %d%',
  },

  lightbulb: {
    brightness: '%s – η φωτεινότητα είναι %d%',
    fadeHours: '%s – μείωση φωτεινότητας σε %s ώρες',
    fadeMilliseconds: '%s – μείωση φωτεινότητας σε %s milliseconds',
    fadeMinutes: '%s – μείωση φωτεινότητας σε %s λεπτά',
    fadeSeconds: '%s – μείωση φωτεινότητας σε %s δευτερόλεπτα',
    stateOn: '%s – είναι ενεργό, φωτεινότητα %d%',
  },

  limiter: {
    badPeriod: '%s – μη έγκυρη περίοδος %s για το όριο χρόνου. Πρέπει να είναι μία από: %s',
    badUnits: '%s – μη έγκυρες μονάδες %s για το όριο χρόνου. Πρέπει να είναι μία από: %s',
    expired: '%s – το όριο χρόνου έληξε',
    limitExceedsPeriod: '%s – το όριο χρόνου υπερβαίνει την περίοδο',
    remainingDayPlus: '%s – απομένει πάνω από μία ημέρα',
    remainingHours: '%s – απομένουν %s ώρες',
    remainingMinutes: '%s – απομένουν %s λεπτά',
    remainingSeconds: '%s – απομένουν %s δευτερόλεπτα',
  },

  lock: {
    badDefault: '%s – μη έγκυρη προεπιλεγμένη κατάσταση κλειδαριάς %s. Πρέπει να είναι μία από: %s',
    secured: '%s – κλειδώθηκε',
    unsecured: '%s – ξεκλειδώθηκε',
  },

  onOff: {
    badDefault: '%s – μη έγκυρη προεπιλεγμένη κατάσταση %s',
    stateOff: '%s – απενεργοποιήθηκε',
    stateOn: '%s – ενεργοποιήθηκε',
  },

};

export default el;
