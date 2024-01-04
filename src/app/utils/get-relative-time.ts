
export function getRelativeTimeString(
    date: Date | number,
    lang = navigator.language,
  ): string {
    // Converte o argumento para milissegundos, caso seja um número, ou obtém os milissegundos se já for um objeto Date
    const timeMs = typeof date === 'number' ? date : date.getTime()
  
    // Calcula a diferença em segundos entre a data fornecida e o momento atual
    const deltaSeconds = Math.round((timeMs - Date.now()) / 1000)
  
    // Array representando os cortes de tempo em segundos para minutos, horas, dias, semanas, meses, anos, etc.
    const cutoffs = [
      60,
      3600,
      86400,
      86400 * 7,
      86400 * 30,
      86400 * 365,
      Infinity,
    ]
  
     // Array equivalente aos cortes acima, mas representando as unidades na forma de string
    const units: Intl.RelativeTimeFormatUnit[] = [
      'second',
      'minute',
      'hour',
      'day',
      'week',
      'month',
      'year',
    ]
  
    // Obtém o índice da unidade de corte ideal com base no tempo decorrido
    const unitIndex = cutoffs.findIndex(
      (cutoff) => cutoff > Math.abs(deltaSeconds),
    )
  
    // Obtém o divisor para dividir os segundos. Por exemplo, se a unidade for "day", o divisor
    // será um dia em segundos, permitindo dividir os segundos para obter o número de dias
    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1
  
    // Formata e retorna a representação de tempo relativo
    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })
    return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex])
  }