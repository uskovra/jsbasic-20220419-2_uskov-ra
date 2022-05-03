let calculator = {
<<<<<<< HEAD
    sum() {
        return this.a + this.b
    },

    mul() {
        return this.a * this.b
    },

    read(a, b) {
        this.a = a;
        this.b = b;
    }

=======
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
>>>>>>> 7836f24826dd7b9db9820fdc09c3b600bbf26352
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально