export interface Game {
_id?: string;
title?: string;
description?: string;
photos?: Photo[];
genres?: string[];
platforms?: string[];
tags?: string[];
rating?: number;
totalVotes?: number;
videos?: any[];
createdAt?: Date;
updatedAt?: Date;
__v?: number;
mediumPrice?: number;
releaseYear?: number;
}

export interface RespostaGame {
  games: Game[];
  totalSize: number;
}

export interface Photo {
  url: string;
}
