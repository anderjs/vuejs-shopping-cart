/**
 * Lo que hace esta funcion es sencillamente tomar un arreglo y devolver
 * Los elementos mas cercanos de izquierda a derecha.
 * Por ejemplo tienes [1, 2, 3, 4, 5, 6]
 * offset(arreglo, 0, 2, 2) => retornara [1, 2, 3] obtiene siempre de izquierda a derecha.
 */
export default function offset(arr, currentPosition, fromLeft, fromRight) {
  if (typeof arr !== 'object') {
    return []
  }
  const size = arr.length

  return arr.filter(value => {
    return (
      value >= Math.max(arr[0], arr[currentPosition] - fromLeft) &&
      value <= Math.min(size, arr[currentPosition] + fromRight)
    )
  })
}