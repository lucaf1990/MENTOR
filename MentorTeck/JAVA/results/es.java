package JAVA.results;

public class es {
    public static int calcolaSomma(int a, int b) {
        return a + b;
    }

    public static int contaVocali(String str) {
        int count = 0;
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I'
                    || ch == 'O' || ch == 'U') {
                count++;
            }
        }
        return count;
    }

    public static boolean isNumeroPrimo(int n) {
        if (n <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static int calcolaFattoriale(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        int fattoriale = 1;
        for (int i = 2; i <= n; i++) {
            fattoriale *= i;
        }
        return fattoriale;
    }

    public static int trovaMassimo(int[] array) {
        if (array.length == 0) {
            throw new IllegalArgumentException("L'array è vuoto");
        }
        int max = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }
}
