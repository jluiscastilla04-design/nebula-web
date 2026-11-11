import type { DownloadCatalog } from '../types'

export const DOWNLOADS: DownloadCatalog = {
  windows: [
    { kind: 'file', title: 'Instalador .msi', description: 'Recomendado. Instala Nebula y lo agrega al PATH automáticamente.', fileName: 'nebula-setup-x64.msi' },
    { kind: 'file', title: 'Ejecutable portátil', description: 'Sin instalación. Ideal para probar sin modificar tu sistema.', fileName: 'nebula-x64.exe' },
  ],
  macos: [
    { kind: 'file', title: 'Paquete .pkg', description: 'Instalador universal para Apple Silicon e Intel.', fileName: 'nebula-macos.pkg' },
    { kind: 'command', title: 'Homebrew', description: 'Instala y actualiza Nebula desde la terminal.', commands: ['brew install nebula-lang'] },
  ],
  linux: [
    { kind: 'file', title: 'Archivo .tar.gz', description: 'Binario estático, sin dependencias externas.', fileName: 'nebula-linux-x64.tar.gz' },
    { kind: 'command', title: 'Gestores de paquetes', description: 'Disponible vía apt y pacman.', commands: ['sudo apt install nebula-lang', 'sudo pacman -S nebula-lang'] },
  ],
}
