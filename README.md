# Maze Runner

Este projeto é uma tarefa de aula de algoritmos avançadaos.

## Faça um ratinho sair do labirinto

Dado um array de 2 dimensões contendo os seguintes caracteres

* '.' = espaço vazio
* '#' = parede
* 'S' = posição inicial (6,1)
* 'E' = saída (0,30) 
* 'C' = queijo (2,2)/(5,22)/(6,9)

```
  0         1         2         3
  0123456789012345678901234567890123456
0 #################################E###
1 ###....#.....#......###...#...#...#.#
2 #.C.##...###...####.....#..##.#.##..#
3 #.#########.###....##.####.##.#.#..##
4 #.............##.######..#......#...#
5 #####.#####.#..........C.##########.#
6 #S.......C..###.#.#.##..............#
7 #####################################
```

### Objetivos
Desenvolver uma aplicação que responda (colocadas aqui em ordem de dificuldade):

1. É possível chegar a uma saída? (Sim ou Não)
2. Quantos passos são necessários para chegar a saída seguindo o caminho mais curto?
3. Imprimir o caminho que foi seguido para chegar a saída
4. Criar os testes unitários para os objetos usados
5. Comer todo queijo possível (o rato deve arrotar toda vez que comer um queijo)
5. Apresentar o labirinto e demais objetos de cena graficamente

### Alcançando a saída

O problema deve ser tratado como um grafo (graph) onde os elementos 'S', 'E' e '.' devem ser tratados como vértices (vertex). Cada vértice adjacente é conectado por uma aresta (edge). O problema deve ser resolvido usando busca em largura (breadth[first search ou BFS)

Dado que o grafo está implicitamente informado pela matriz de caracteres armazenada no labirinto, precisamos apenas de uma estrutura adicional para controlar as visitas (color matrix):

```
int color[num_rows][num_columns];
    * white = um vértice não visitado (ainda não está na fila)
    * gray  = um vértice aguardando na fila (queue)
    * black = um vértice finalizado (já visitado  não está mais na fila) 
```

No início todos os vértices são brancos. Quando eles entram na fila de processamento se 

tornam cinza, e viram preto quando saem da fila (dequeue)

```
for row from 0 to num_rows[1 {
  for column from 0 to num_columns[1 {
    color[row][column] = white;
  }
}
```

A fila de processamento deve ser inicializada com a entrada 'S' do labirinto:

```
q = new queue();
q.enqueue(start_row,start_column);
color[start_row][start_column] = gray;
```

Enquanto a fila não estiver vazia, realizamos a procura BFS.