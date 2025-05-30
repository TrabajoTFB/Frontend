#!/bin/bash

MAIN_BRANCH="main"

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "Estás en la rama: $CURRENT_BRANCH"
echo "Actualizando $MAIN_BRANCH desde origin..."
git fetch origin

echo "Fusionando cambios de $MAIN_BRANCH en $CURRENT_BRANCH..."
git merge origin/$MAIN_BRANCH

if [ $? -eq 0 ]; then
  echo "✅ Rama '$CURRENT_BRANCH' actualizada con los últimos cambios de '$MAIN_BRANCH'."
  echo "¿Quieres hacer push ahora? (s/n)"
  read -r CONFIRM_PUSH

  if [[ "$CONFIRM_PUSH" == "s" ]]; then
    git push
    echo "📤 Cambios subidos."
  else
    echo "❗ Push no realizado."
  fi
else
  echo "⚠️ Conflictos encontrados durante el merge. Resuélvelos y luego haz commit."
fi
