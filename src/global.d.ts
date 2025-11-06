// global.d.ts
export {};

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export class MeshLineGeometry extends THREE.BufferGeometry {
    setPoints(points: THREE.Vector3[]): void;
  }

  export class MeshLineMaterial extends THREE.ShaderMaterial {
    lineWidth: number;
    color: THREE.Color;
    map?: THREE.Texture;
    repeat?: [number, number];
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: ReactThreeFiber.Object3DNode<any, typeof THREE.BufferGeometry>;
      meshLineMaterial: ReactThreeFiber.Object3DNode<any, typeof THREE.ShaderMaterial>;
    }
  }
}
