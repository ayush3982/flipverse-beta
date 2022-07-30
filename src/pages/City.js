import {Suspense, useRef} from 'react'
import {Canvas , useFrame} from '@react-three/fiber'
import {OrbitControls, useGLTF, Environment} from '@react-three/drei'
import styles from '../styles/city.module.css'

export function Model(props) {
    const { nodes, materials } = useGLTF('/assets/city.glb')
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-21800, 0, -8650]}>
              <group position={[0, 170, 0]}>
                <mesh geometry={nodes.pCube2_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[-1339.39, -9.7, 0]} scale={1.03}>
                <mesh geometry={nodes.polySurface1_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[-1339.31, 4.84, -11.04]} scale={1.03}>
                <group position={[780.78, 0, 0]}>
                  <mesh geometry={nodes.polySurface4_Paramount_0.geometry} material={materials.Paramount} />
                </group>
                <group position={[789.52, 0, 0]}>
                  <mesh geometry={nodes.polySurface9_Paramount_0.geometry} material={materials.Paramount} />
                </group>
                <group position={[789.52, 0, 0]}>
                  <mesh geometry={nodes.polySurface10_Paramount_0.geometry} material={materials.Paramount} />
                </group>
                <group position={[789.52, 0, 0]}>
                  <mesh geometry={nodes.polySurface11_Paramount_0.geometry} material={materials.Paramount} />
                </group>
                <group position={[789.52, 0, 0]}>
                  <mesh geometry={nodes.polySurface12_Paramount_0.geometry} material={materials.Paramount} />
                </group>
                <group position={[735.21, 1144.85, 622.11]} scale={[0.07, 0.14, 0.2]}>
                  <mesh geometry={nodes.pCube4_Paramount_0.geometry} material={materials.Paramount} />
                </group>
                <group position={[735.21, 588.03, 622.11]} scale={[0.07, 0.14, 0.2]}>
                  <mesh geometry={nodes.pCube5_Paramount_0.geometry} material={materials.Paramount} />
                </group>
              </group>
              <group position={[0, 470, 0]}>
                <mesh geometry={nodes.pCube6_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[-600, 0, 0]}>
                <mesh geometry={nodes.polySurface13_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[310.87, 0, 0]} scale={[0.28, 1, 1]}>
                <mesh geometry={nodes.polySurface14_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[65.72, 1340.69, -382.24]} scale={[0.29, 0.47, 0.29]}>
                <mesh geometry={nodes.pCube7_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[37.45, 3.73, -170]} scale={[0.99, 0.75, 0.99]}>
                <mesh geometry={nodes.polySurface15_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[-1300, 0, 0]}>
                <mesh geometry={nodes.polySurface16_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[431.71, 2047.19, -384.27]} scale={[0.08, 0.05, 0.08]}>
                <mesh geometry={nodes.pCylinder1_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[-0.8, 1663.44, -202.43]} rotation={[Math.PI / 2, 0, 0]} scale={[1.09, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane69_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[1200, 0, 0]}>
                <group position={[0, 170, 0]}>
                  <mesh geometry={nodes.pCube2_Paramount_0_2.geometry} material={materials.Paramount} />
                </group>
                <group position={[0, 470, 0]}>
                  <mesh geometry={nodes.pCube6_Paramount_0_2.geometry} material={materials.Paramount} />
                </group>
                <group position={[0, 470, -1200]}>
                  <mesh geometry={nodes.pCube99_Paramount_0.geometry} material={materials.Paramount} />
                </group>
                <group position={[0, 170, -1200]}>
                  <mesh geometry={nodes.pCube101_Paramount_0.geometry} material={materials.Paramount} />
                </group>
              </group>
              <group position={[0, 470, -1200]}>
                <mesh geometry={nodes.pCube98_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[0, 170, -1200]}>
                <mesh geometry={nodes.pCube100_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[0, 470, -1200]}>
                <mesh geometry={nodes.pCube102_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[-522.88, 4.84, -11.04]} scale={1.03}>
                <mesh geometry={nodes.polySurface3_Paramount1GLOW_0.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[-529.46, 4.84, -11.04]} scale={1.03}>
                <mesh geometry={nodes.polySurface8_Paramount1GLOW_0.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[-529.46, 4.84, -11.04]} scale={1.03}>
                <mesh geometry={nodes.polySurface7_Paramount1GLOW_0.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[-529.46, 4.84, -11.04]} scale={1.03}>
                <mesh geometry={nodes.polySurface6_Paramount1GLOW_0.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[-529.46, 4.84, -11.04]} scale={1.03}>
                <mesh geometry={nodes.polySurface5_Paramount1GLOW_0.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[396.04, 1375.22, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane68_Paramount1GLOW_0.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[-392.16, 770.33, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane58_Paramount1GLOW_0.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[2.32, 464.99, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane57_Paramount1GLOW_0.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[807.84, 770.33, 607.47]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane333_Paramount1GLOW_0.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[1050, 464.99, 607.47]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane334_Paramount1GLOW_0.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[396.04, 1071.37, -1205.6]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane332_Paramount1GLOW_0.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[-609.97, 1083.39, 435.92]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1.41, 1, 1]}>
                <mesh geometry={nodes.pPlane71_Paramount1GLOW_0.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[-391.54, 1375.22, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane62_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[2.32, 1375.22, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane67_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[-391.54, 1071.37, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane61_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[2.32, 1071.37, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane65_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[396.04, 1071.37, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane66_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[396.04, 770.33, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane64_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[2.32, 770.33, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane63_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[396.04, 464.99, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane60_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[-391.54, 464.99, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane56_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[808.46, 464.99, 607.47]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane335_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[1050, 770.33, 607.47]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane336_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[1050, 1071.37, 607.47]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane337_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[808.46, 1071.37, 607.47]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane338_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[607.87, 1363.2, 435.92]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1.41, 1, 1]}>
                <mesh geometry={nodes.pPlane329_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[2.32, 1071.37, -1205.6]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane331_Paramount_0.geometry} material={materials.Paramount} />
              </group>
              <group position={[-391.54, 1071.37, -1205.6]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane330_Paramount_0.geometry} material={materials.Paramount} />
              </group>
            </group>
            <group position={[-16100, 0, -8961.31]}>
              <group position={[-1950, 0, 511.31]}>
                <group scale={[0.66, 1, 0.67]}>
                  <group position={[0, 170, 0]}>
                    <mesh geometry={nodes.pCube11_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 550, 0]}>
                    <mesh geometry={nodes.pCube12_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 900, 0]}>
                    <mesh geometry={nodes.pCube13_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[1806.95, 471.69, 15.76]} scale={[4.07, 1.24, 1.08]}>
                    <mesh geometry={nodes.polySurface17_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[2329.6, 471.69, 15.76]} scale={[4.07, 1.24, 1.08]}>
                    <mesh geometry={nodes.polySurface18_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[1806.95, 810.33, 15.76]} scale={[4.07, 1.24, 1.08]}>
                    <mesh geometry={nodes.polySurface19_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[2329.6, 810.33, 15.76]} scale={[4.07, 1.24, 1.08]}>
                    <mesh geometry={nodes.polySurface20_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[-341.05, 80, 66.88]} scale={[1, 1, 0.75]}>
                    <mesh geometry={nodes.polySurface79_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[4334.54, 331.18, 7.29]} scale={[9.64, 0.53, 1.08]}>
                    <mesh geometry={nodes.polySurface128_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 900, -1200]}>
                    <mesh geometry={nodes.pCube104_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 550, -1200]}>
                    <mesh geometry={nodes.pCube105_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 170, -1200]}>
                    <mesh geometry={nodes.pCube106_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[1292.04, 810.33, 15.76]} scale={[4.07, 1.24, 1.08]}>
                    <mesh geometry={nodes.polySurface806_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[1292.04, 471.69, 15.76]} scale={[4.07, 1.24, 1.08]}>
                    <mesh geometry={nodes.polySurface807_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[22.27, 28.93, 32.95]} scale={[0.3, 0.86, 0.62]}>
                  <mesh geometry={nodes.polySurface34_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[0, -30.74, 0]}>
                  <group position={[0, 1280.74, 0]} scale={[0.66, 1, 0.67]}>
                    <mesh geometry={nodes.pCube34_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[1198.21, 1191.07, 10.63]} scale={[2.7, 1.24, 0.73]}>
                    <mesh geometry={nodes.polySurface131_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[1544.79, 1191.07, 10.63]} scale={[2.7, 1.24, 0.73]}>
                    <mesh geometry={nodes.polySurface132_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[949.4, 1203.37, 983.32]} rotation={[0, -Math.PI / 2, 0]} scale={[1.32, 1.08, 0.71]}>
                    <mesh geometry={nodes.polySurface137_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[949.4, 1203.37, 1148.16]} rotation={[0, -Math.PI / 2, 0]} scale={[1.32, 1.08, 0.71]}>
                    <mesh geometry={nodes.polySurface138_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 290.1, 0]} scale={[0.66, 1.17, 0.67]}>
                    <mesh geometry={nodes.polySurface139_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 460.74, 0]} scale={[0.66, 1, 0.67]}>
                    <mesh geometry={nodes.polySurface140_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-518.43, 460.74, -269.79]} scale={[0.66, 1, 0.5]}>
                    <mesh geometry={nodes.polySurface141_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-441.71, 1191.73, -156.04]} scale={[0.2, 0.35, 0.26]}>
                    <mesh geometry={nodes.polySurface142_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[229.41, 1639.91, -265.08]} scale={0.48}>
                    <mesh geometry={nodes.pCylinder10_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[231.76, 1639.91, -475.05]} scale={0.48}>
                    <mesh geometry={nodes.pCylinder11_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 1280.74, -809.32]} scale={[0.66, 1, 0.67]}>
                    <mesh geometry={nodes.pCube103_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[229.41, 1639.91, -69.66]} scale={0.48}>
                    <mesh geometry={nodes.pCylinder12_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-146.36, 460.74, -269.79]} scale={[0.66, 1, 0.5]}>
                    <mesh geometry={nodes.polySurface804_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[856.77, 1191.07, 10.63]} scale={[2.7, 1.24, 0.73]}>
                    <mesh geometry={nodes.polySurface805_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[949.4, 1203.37, -255.06]} rotation={[0, -Math.PI / 2, 0]} scale={[1.32, 1.08, 0.71]}>
                    <mesh geometry={nodes.polySurface808_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[949.4, 856.17, -255.06]} rotation={[0, -Math.PI / 2, 0]} scale={[1.32, 1.08, 0.71]}>
                    <mesh geometry={nodes.polySurface809_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[856.77, 1191.07, -1885.09]} scale={[2.7, 1.24, 0.73]}>
                    <mesh geometry={nodes.polySurface810_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[1198.21, 1191.07, -1885.09]} scale={[2.7, 1.24, 0.73]}>
                    <mesh geometry={nodes.polySurface811_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[1544.79, 1191.07, -1885.09]} scale={[2.7, 1.24, 0.73]}>
                    <mesh geometry={nodes.polySurface812_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-163.61, 1203.37, 1148.16]} rotation={[0, -Math.PI / 2, 0]} scale={[1.32, 1.08, 0.71]}>
                    <mesh geometry={nodes.polySurface813_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-163.61, 1203.37, 983.32]} rotation={[0, -Math.PI / 2, 0]} scale={[1.32, 1.08, 0.71]}>
                    <mesh geometry={nodes.polySurface814_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-163.61, 1203.37, -255.06]} rotation={[0, -Math.PI / 2, 0]} scale={[1.32, 1.08, 0.71]}>
                    <mesh geometry={nodes.polySurface815_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[-163.61, 856.17, -255.06]} rotation={[0, -Math.PI / 2, 0]} scale={[1.32, 1.08, 0.71]}>
                    <mesh geometry={nodes.polySurface816_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[74.01, 0, -60.35]} scale={[-1.28, 1, 0.77]}>
                  <group position={[603.91, 122.08, 542.33]} scale={396.94}>
                    <mesh geometry={nodes.pCube17_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[274.03, 251.47, -834.31]} scale={[-0.78, 0.86, 3.6]}>
                    <mesh geometry={nodes.polySurface130_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[293.44, 0, 69.63]} scale={[-0.78, 1, 1.3]}>
                    <mesh geometry={nodes.polySurface129_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
              </group>
              <group position={[-900, 0, 311.31]}>
                <group position={[0, 170, 0]}>
                  <mesh geometry={nodes.pCube26_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[-1339.39, -672.9, 0]} scale={[1.03, 3.17, 1.03]}>
                  <mesh geometry={nodes.polySurface112_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[1200, 170, 0]}>
                  <mesh geometry={nodes.pCube29_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[0, 928.8, 0]}>
                  <mesh geometry={nodes.pCube30_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[0, 628.8, 0]}>
                  <mesh geometry={nodes.pCube31_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <mesh geometry={nodes.polySurface113_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                <group position={[572.63, 474.26, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface114_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[164.54, 474.26, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface115_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[-265.15, 474.26, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface116_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[1008.38, 474.26, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface117_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[1392.85, 474.26, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface118_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[1392.85, 194.97, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface119_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[1008.38, 194.97, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface120_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[572.63, 194.97, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface121_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[164.54, 194.97, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface122_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[-265.15, 194.97, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface123_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[-422.42, 586.37, 747.99]} scale={[0.89, 1, 1]}>
                  <mesh geometry={nodes.pCube32_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[-422.42, 743.48, 717.83]} scale={[0.89, 1.69, 0.35]}>
                  <mesh geometry={nodes.pCube33_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[-288.84, 665.62, 0]} scale={0.4}>
                  <mesh geometry={nodes.polySurface124_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[231.5, 665.62, -413.34]} scale={0.4}>
                  <mesh geometry={nodes.polySurface125_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[-0.48, 0, -236.31]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <group position={[627.21, 1309.44, 196.23]} scale={[1, 1, 0.91]}>
                    <mesh geometry={nodes.pCube23_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[608.16, 598.99, 102.37]} scale={[0.67, 0.67, 0.84]}>
                    <mesh geometry={nodes.pCylinder7_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[1200.48, 0, 142.25]}>
                  <group position={[627.21, 1309.44, 196.23]} scale={[1, 1, 0.91]}>
                    <mesh geometry={nodes.pCube23_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[608.16, 598.99, 102.37]} scale={[0.67, 0.67, 0.84]}>
                    <mesh geometry={nodes.pCylinder7_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[1.03, 0, 258.05]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <group position={[362.63, 295.52, 418.22]} rotation={[0, Math.PI / 2, 0]} scale={[0.04, 0.1, 0.4]}>
                    <mesh geometry={nodes.polySurface98_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[166.9, 14.37, 422.84]} rotation={[0, Math.PI / 2, 0]} scale={[0.08, 0.4, 0.74]}>
                    <mesh geometry={nodes.polySurface97_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[1202.72, 0, -193.83]}>
                  <group position={[362.63, 295.52, 299.4]} rotation={[0, Math.PI / 2, 0]} scale={[0.04, 0.1, 0.4]}>
                    <mesh geometry={nodes.polySurface98_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[162.1, 14.37, 293.83]} rotation={[0, Math.PI / 2, 0]} scale={[0.08, 0.4, 0.74]}>
                    <mesh geometry={nodes.polySurface97_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[1680.62, 1150.85, -472.47]} scale={0.61}>
                  <mesh geometry={nodes.pCylinder9_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[3650, 0, 0]}>
                  <mesh geometry={nodes.polySurface256_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[3600, 0, 0]}>
                  <mesh geometry={nodes.polySurface257_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[3600, 0, 0]}>
                  <mesh geometry={nodes.polySurface258_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                </group>
              </group>
            </group>
            <group position={[-19700, 0, -8950]}>
              <group position={[500, 0, -495.34]}>
                <group scale={[0.66, 1, 0.67]}>
                  <group position={[0, 170, 0]}>
                    <mesh geometry={nodes.pCube11_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 550, 0]}>
                    <mesh geometry={nodes.pCube12_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 900, 0]}>
                    <mesh geometry={nodes.pCube13_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[2329.6, 471.69, -1217.49]} scale={[4.07, 1.24, 1.08]}>
                    <mesh geometry={nodes.polySurface21_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[1737.67, 810.33, -1218.7]} scale={[4.07, 1.24, 1.08]}>
                    <mesh geometry={nodes.polySurface22_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[2329.6, 810.33, -1217.49]} scale={[4.07, 1.24, 1.08]}>
                    <mesh geometry={nodes.polySurface23_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[1737.67, 471.69, -1217.49]} scale={[4.07, 1.24, 1.08]}>
                    <mesh geometry={nodes.polySurface24_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[-1527.4, 483.9, 419.53]} rotation={[0, -Math.PI / 2, 0]} scale={[1.59, 1.08, 1.08]}>
                    <mesh geometry={nodes.polySurface27_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-1527.4, 815.6, 663.94]} rotation={[0, -Math.PI / 2, 0]} scale={[1.59, 1.08, 1.08]}>
                    <mesh geometry={nodes.polySurface28_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[-1527.4, 815.6, 419.53]} rotation={[0, -Math.PI / 2, 0]} scale={[1.59, 1.08, 1.08]}>
                    <mesh geometry={nodes.polySurface29_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[1430.25, 815.6, 669.09]} rotation={[0, -Math.PI / 2, 0]} scale={[1.59, 1.08, 1.08]}>
                    <mesh geometry={nodes.polySurface30_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[1430.25, 815.6, 913.5]} rotation={[0, -Math.PI / 2, 0]} scale={[1.59, 1.08, 1.08]}>
                    <mesh geometry={nodes.polySurface31_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[1430.25, 473.09, 913.5]} rotation={[0, -Math.PI / 2, 0]} scale={[1.59, 1.08, 1.08]}>
                    <mesh geometry={nodes.polySurface32_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[1430.25, 473.09, 669.09]} rotation={[0, -Math.PI / 2, 0]} scale={[1.59, 1.08, 1.08]}>
                    <mesh geometry={nodes.polySurface33_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-1354.02, 900, 0]}>
                    <mesh geometry={nodes.pCube131_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-1354.02, 550, 0]}>
                    <mesh geometry={nodes.pCube132_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-1354.02, 170, 0]}>
                    <mesh geometry={nodes.pCube133_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[0, -30.74, 0]}>
                  <group position={[0, -59.9, 0]} scale={[0.66, 1.17, 0.67]}>
                    <mesh geometry={nodes.polySurface139_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 110.74, 0]} scale={[0.66, 1, 0.67]}>
                    <mesh geometry={nodes.polySurface140_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-133.97, 1292.93, -231.44]} scale={0.49}>
                    <mesh geometry={nodes.pCylinder10_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[192.85, 1292.93, -231.44]} scale={0.49}>
                    <mesh geometry={nodes.pCylinder11_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-1189.94, 1292.93, -231.44]} scale={0.49}>
                    <mesh geometry={nodes.pCylinder13_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-338.52, 0, 170.87]} rotation={[0, -Math.PI / 2, 0]}>
                    <group position={[-150, 841.73, -70.7]} scale={[0.2, 0.35, 0.26]}>
                      <mesh geometry={nodes.polySurface142_FillerBuildings1_0_11.geometry} material={materials.FillerBuildings1} />
                    </group>
                    <group position={[-226.16, 110.74, -150.5]} scale={[0.66, 1, 0.5]}>
                      <mesh geometry={nodes.polySurface141_FillerBuildings1_0_11.geometry} material={materials.FillerBuildings1} />
                    </group>
                  </group>
                </group>
                <group position={[-628.94, 0, -236.53]} scale={[-1.28, 1, 0.77]}>
                  <group position={[603.91, 122.08, 542.33]} scale={396.94}>
                    <mesh geometry={nodes.pCube17_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[271.74, 251.47, -834.31]} scale={[-0.78, 0.86, 3.6]}>
                    <mesh geometry={nodes.polySurface130_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[293.44, 0, 69.63]} scale={[-0.78, 1, 1.3]}>
                    <mesh geometry={nodes.polySurface129_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
              </group>
              <mesh geometry={nodes.pCube20_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.pCube20_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.pCube21_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface80_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface81_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface82_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface83_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface84_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.polySurface85_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.polySurface86_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.polySurface87_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface88_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface89_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface90_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.polySurface91_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.polySurface92_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface93_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.polySurface94_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.polySurface95_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface96_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface99_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface101_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.pCube23_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.pCylinder7_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface102_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.pCube24_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.pCube25_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface103_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface104_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface105_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface106_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.polySurface107_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface108_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.polySurface109_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.pCube23_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.pCylinder7_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface98_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface97_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface98_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface97_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface110_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface111_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface821_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface822_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.pCylinder8_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.pCube22_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.polySurface823_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.pCube130_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface824_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface825_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.polySurface826_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.polySurface827_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.polySurface828_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.polySurface829_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
            </group>
            <group position={[-8900, 0, -12550]}>
              <group position={[500, 0, 511.31]}>
                <group scale={[0.66, 1, 0.67]}>
                  <group position={[4334.54, 331.18, 7.29]} scale={[9.64, 0.53, 1.08]}>
                    <mesh geometry={nodes.polySurface128_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[33.59, 28.93, 48.85]} scale={[0.46, 0.86, 0.92]}>
                    <mesh geometry={nodes.polySurface34_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[0, -30.74, 0]}>
                  <group position={[0, 290.1, 0]} scale={[0.66, 1.17, 0.67]}>
                    <mesh geometry={nodes.polySurface139_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 460.74, 0]} scale={[0.66, 1, 0.67]}>
                    <mesh geometry={nodes.polySurface140_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-518.43, 460.74, -269.79]} scale={[0.66, 1, 0.5]}>
                    <mesh geometry={nodes.polySurface141_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-441.71, 1191.73, -156.04]} scale={[0.2, 0.35, 0.26]}>
                    <mesh geometry={nodes.polySurface142_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[229.41, 1639.91, -265.08]} scale={0.48}>
                    <mesh geometry={nodes.pCylinder10_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[231.76, 1639.91, -475.05]} scale={0.48}>
                    <mesh geometry={nodes.pCylinder11_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[229.41, 1639.91, -69.66]} scale={0.48}>
                    <mesh geometry={nodes.pCylinder12_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-146.36, 460.74, -269.79]} scale={[0.66, 1, 0.5]}>
                    <mesh geometry={nodes.polySurface804_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
              </group>
              <group position={[-500, 0, 450]}>
                <group scale={[0.66, 1, 0.67]}>
                  <group position={[0, 170, 0]}>
                    <mesh geometry={nodes.pCube11_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 550, 0]}>
                    <mesh geometry={nodes.pCube12_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 900, 0]}>
                    <mesh geometry={nodes.pCube13_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[0, -30.74, 0]}>
                  <group position={[0, -59.9, 0]} scale={[0.66, 1.17, 0.67]}>
                    <mesh geometry={nodes.polySurface139_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 110.74, 0]} scale={[0.66, 1, 0.67]}>
                    <mesh geometry={nodes.polySurface140_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-262.15, 110.74, 45.11]} scale={[0.66, 1, 0.5]}>
                    <mesh geometry={nodes.polySurface141_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-185.99, 841.73, 124.91]} scale={[0.2, 0.35, 0.26]}>
                    <mesh geometry={nodes.polySurface142_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-202.05, 1293.19, -231.44]} scale={0.5}>
                    <mesh geometry={nodes.pCylinder10_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[124.78, 1293.19, -231.44]} scale={0.5}>
                    <mesh geometry={nodes.pCylinder11_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[376.53, 0, -60.35]} scale={[-1.28, 1, 0.77]}>
                  <group position={[603.91, 122.08, 542.33]} scale={396.94}>
                    <mesh geometry={nodes.pCube17_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[271.74, 251.47, -834.31]} scale={[-0.78, 0.86, 3.6]}>
                    <mesh geometry={nodes.polySurface130_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[293.44, 0, 69.63]} scale={[-0.78, 1, 1.3]}>
                    <mesh geometry={nodes.polySurface129_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
              </group>
              <group position={[-500, 0, -450]} rotation={[-Math.PI, 0, -Math.PI]}>
                <group scale={[0.66, 1, 0.67]}>
                  <group position={[0, 170, 0]}>
                    <mesh geometry={nodes.pCube11_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 550, 0]}>
                    <mesh geometry={nodes.pCube12_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 900, 0]}>
                    <mesh geometry={nodes.pCube13_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[0, -30.74, 0]}>
                  <group position={[0, -59.9, 0]} scale={[0.66, 1.17, 0.67]}>
                    <mesh geometry={nodes.polySurface139_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 110.74, 0]} scale={[0.66, 1, 0.67]}>
                    <mesh geometry={nodes.polySurface140_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[128.14, 110.74, 45.11]} scale={[0.66, 1, 0.5]}>
                    <mesh geometry={nodes.polySurface141_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[204.3, 841.73, 124.91]} scale={[0.2, 0.35, 0.26]}>
                    <mesh geometry={nodes.polySurface142_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-133.97, 1293.19, -231.44]} scale={0.5}>
                    <mesh geometry={nodes.pCylinder10_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[192.85, 1293.19, -231.44]} scale={0.5}>
                    <mesh geometry={nodes.pCylinder11_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
              </group>
              <group position={[8900, 0, 12550]}>
                <mesh geometry={nodes.Filler_SalsGlow_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
              </group>
              <group position={[8900, 0, 12550]}>
                <mesh geometry={nodes.Filler_SalsWindows_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              </group>
              <group position={[8900, 0, 12550]}>
                <mesh geometry={nodes.Filler_SalsT8_group8_pCube11_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
              </group>
            </group>
            <group position={[-15050, 0, -6400]}>
              <mesh geometry={nodes.polySurface260_CityProps_0.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface261_CityProps_0.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface791_CityProps_0.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface791_CityProps1GLOW_0.geometry} material={materials.CityProps1GLOW} />
              <mesh geometry={nodes.polySurface259_CityProps_0.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface752_CityProps_0.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface264_CityProps_0.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_RedGLOW_0.geometry} material={materials.RedGLOW} />
              <mesh geometry={nodes.polySurface262_CityProps_0_1.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_2.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0_1.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface750_CityProps_0_8.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface752_CityProps_0_1.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface264_CityProps_0_1.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_3.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_RedGLOW_0_1.geometry} material={materials.RedGLOW} />
              <mesh geometry={nodes.polySurface262_CityProps_0_4.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0_2.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_5.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0_3.geometry} material={materials.CityProps} />
            </group>
            <group position={[-15050, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
              <mesh geometry={nodes.polySurface260_CityProps_0_1.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface261_CityProps_0_1.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface791_CityProps_0_1.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_1.geometry} material={materials.CityProps1GLOW} />
              <mesh geometry={nodes.polySurface259_CityProps_0_1.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface752_CityProps_0_2.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface264_CityProps_0_2.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_6.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0_4.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_7.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0_5.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_8.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_GreenGlow_0.geometry} material={materials.GreenGlow} />
              <mesh geometry={nodes.polySurface750_CityProps_0_9.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface752_CityProps_0_3.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface264_CityProps_0_3.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_9.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0_6.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_10.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0_7.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_11.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_GreenGlow_0_1.geometry} material={materials.GreenGlow} />
            </group>
            <group position={[-13550, 0, -7900]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh geometry={nodes.polySurface260_CityProps_0_2.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface261_CityProps_0_2.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface791_CityProps_0_2.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_2.geometry} material={materials.CityProps1GLOW} />
              <mesh geometry={nodes.polySurface259_CityProps_0_2.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface752_CityProps_0_4.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface264_CityProps_0_4.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_12.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0_8.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_13.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0_9.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_14.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0_10.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface750_CityProps_0_10.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface752_CityProps_0_5.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface264_CityProps_0_5.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_15.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_RedGLOW_0_2.geometry} material={materials.RedGLOW} />
              <mesh geometry={nodes.polySurface262_CityProps_0_16.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0_11.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_17.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0_12.geometry} material={materials.CityProps} />
            </group>
            <group position={[-13550, 0, -6400]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.polySurface260_CityProps_0_3.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface261_CityProps_0_3.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface791_CityProps_0_3.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_3.geometry} material={materials.CityProps1GLOW} />
              <mesh geometry={nodes.polySurface259_CityProps_0_3.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface752_CityProps_0_6.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface264_CityProps_0_6.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_18.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0_13.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_19.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0_14.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_20.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_GreenGlow_0_2.geometry} material={materials.GreenGlow} />
              <mesh geometry={nodes.polySurface750_CityProps_0_11.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface752_CityProps_0_7.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface264_CityProps_0_7.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_21.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0_15.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_22.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_CityProps_0_16.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface262_CityProps_0_23.geometry} material={materials.CityProps} />
              <mesh geometry={nodes.polySurface739_GreenGlow_0_3.geometry} material={materials.GreenGlow} />
            </group>
            <group position={[-22656.9, 0, 7394.79]} rotation={[0, -Math.PI / 2, 0]}>
              <mesh geometry={nodes.polySurface839_WhiteGlow1_0.geometry} material={materials.WhiteGlow1} />
            </group>
            <group position={[-28598.89, 0, -14300.7]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh geometry={nodes.polySurface838_WhiteGlow1_0.geometry} material={materials.WhiteGlow1} />
            </group>
            <group position={[-21450.22, 0, 7149.48]} rotation={[0, -Math.PI / 2, 0]}>
              <mesh geometry={nodes.polySurface837_WhiteGlow1_0.geometry} material={materials.WhiteGlow1} />
            </group>
            <mesh geometry={nodes.polySurface750_WhiteGlow1_0.geometry} material={materials.WhiteGlow1} />
            <group position={[-12163.75, 120.33, -8245.04]} rotation={[0, 1.43, 0]} scale={139.53}>
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_INT_BTM_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_TRANS_GLASS_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_16_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_20_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_RUBBER_WFR_Tire_0.geometry} material={materials.Tire} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_RUBBER_WRR_Tire_0.geometry} material={materials.Tire} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_11_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_10_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_8_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_LIGHTS_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_HOOD_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_5_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_3_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_2_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_1_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE__elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_RUBBER_WRL_Tire_0.geometry} material={materials.Tire} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_RUBBER_WFL_Tire_0.geometry} material={materials.Tire} />
              <group position={[0, -0.06, 0]}>
                <mesh geometry={nodes.pasted__ALPHA_OPAQUE_BRAKE_BFL_Tire_0.geometry} material={materials.Tire} />
              </group>
              <group position={[0, -0.06, 0]}>
                <mesh geometry={nodes.pasted__ALPHA_OPAQUE_BRAKE_BFR_Tire_0.geometry} material={materials.Tire} />
              </group>
              <group position={[0, -0.06, 0]}>
                <mesh geometry={nodes.pasted__ALPHA_OPAQUE_BRAKE_BRR_Tire_0.geometry} material={materials.Tire} />
              </group>
              <group position={[0, -0.06, 0]}>
                <mesh geometry={nodes.pasted__ALPHA_OPAQUE_BRAKE_BRL_Tire_0.geometry} material={materials.Tire} />
              </group>
              <mesh geometry={nodes.pasted__ALPHA_ADD_LENS_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_INT_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_21_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__GEOM_STEERINGWHEEL_elise_0.geometry} material={materials.elise} />
              <mesh geometry={nodes.pasted__ALPHA_OPAQUE_REAR_elise_0.geometry} material={materials.elise} />
            </group>
            <mesh geometry={nodes.LM_Basketball9_Basketball_0.geometry} material={materials.Basketball} />
            <group position={[27000, 0, 0]}>
              <mesh geometry={nodes.LM_Basketball10_Basketball_0.geometry} material={materials.Basketball} />
            </group>
            <group position={[-7150, 0, -46650]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.LM_Basketball11_Basketball_0.geometry} material={materials.Basketball} />
            </group>
            <mesh geometry={nodes.LM_Clinic2_Clinic_0.geometry} material={materials.Clinic} />
            <mesh geometry={nodes.pCube45_FillerBuildings1GLOW_0.geometry} material={materials.FillerBuildings1GLOW} />
            <mesh geometry={nodes.pCube52_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
            <mesh geometry={nodes.group29_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
            <mesh geometry={nodes.Filler_Apartments1_group59_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
            <mesh geometry={nodes.group41_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
            <mesh geometry={nodes.group60_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
            <mesh geometry={nodes.Filler_Apartments2_FillerBuildings1_0.geometry} material={materials.FillerBuildings1} />
            <mesh geometry={nodes.BD_ConcreteBlock1_RoadsGround_0.geometry} material={materials.RoadsGround} />
            <mesh geometry={nodes.LMProjects2_pasted__group65_pasted__pCube39_LMProjects1GLOW_0.geometry} material={materials.LMProjects1GLOW} />
            <mesh geometry={nodes.LMProjects2_pasted__group65_pasted__pCube40_LMProjects_0.geometry} material={materials.LMProjects} />
            <group position={[-32373.63, 2989.81, -9336.86]} rotation={[0, -0.72, 0]} scale={[0.17, 0.26, 0.17]}>
              <mesh geometry={nodes.pasted__pCylinder1_LMProjects_0.geometry} material={materials.LMProjects} />
            </group>
            <mesh geometry={nodes.pasted__group75_LMProjects_0.geometry} material={materials.LMProjects} />
            <group position={[-30500, 20, -8950]}>
              <group position={[400, 150, 0]}>
                <mesh geometry={nodes.pasted__pCube1_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-1300, 2550, 0]}>
                <mesh geometry={nodes.pasted__pCube18_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-1950, 2550, 0]}>
                <mesh geometry={nodes.pasted__pCube19_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[400, 2550, 0]}>
                <mesh geometry={nodes.pasted__pCube20_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-2450, 2550, 0]}>
                <mesh geometry={nodes.pasted__pCube26_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-3100, 2550, 0]}>
                <mesh geometry={nodes.pasted__pCube27_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-3100, 150, 0]}>
                <mesh geometry={nodes.pasted__pCube28_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-1498.95, 668.31, 191.28]} scale={[0.85, 0.54, 0.85]}>
                <mesh geometry={nodes.pasted__pCube31_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-2645.7, 668.31, 191.28]} scale={[0.85, 0.54, 0.85]}>
                <mesh geometry={nodes.pasted__pCube32_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-4020.8, 2823.8, 430.44]} scale={[0.88, 0.62, 0.88]}>
                <mesh geometry={nodes.pasted__pCube52_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-3670.74, 2823.8, -444.38]} scale={[2.88, 0.62, 0.51]}>
                <mesh geometry={nodes.pasted__pCube53_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-3670.74, 2823.8, -205.88]} scale={[2.88, 0.62, 0.51]}>
                <mesh geometry={nodes.pasted__pCube54_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-2185.54, 2465.95, 315.55]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                <mesh geometry={nodes.pasted__pCube55_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-2185.54, 2465.95, -265.65]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                <mesh geometry={nodes.pasted__pCube56_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[413.49, 2823.8, 430.44]} scale={[0.88, 0.62, 0.88]}>
                <mesh geometry={nodes.pasted__pCube57_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-2564.95, 2465.95, -265.65]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                <mesh geometry={nodes.pasted__pCube58_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-2564.95, 2465.95, 315.55]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                <mesh geometry={nodes.pasted__pCube59_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-1421.36, 2465.95, -265.65]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                <mesh geometry={nodes.pasted__pCube60_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-1421.36, 2465.95, 315.55]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                <mesh geometry={nodes.pasted__pCube61_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-1041.95, 2465.95, -265.65]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                <mesh geometry={nodes.pasted__pCube62_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-1041.95, 2465.95, 315.55]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                <mesh geometry={nodes.pasted__pCube63_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-525.84, 2945.76, -37.16]} scale={[0.76, 2.25, 0.11]}>
                <mesh geometry={nodes.pasted__pCube64_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-525.84, 2945.76, -371.81]} scale={[0.76, 2.25, 0.11]}>
                <mesh geometry={nodes.pasted__pCube65_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[-525.84, 2918.94, -76.66]} scale={[0.76, 1.89, 0.11]}>
                <mesh geometry={nodes.pasted__pCube66_LMProjects_0.geometry} material={materials.LMProjects} />
              </group>
              <group position={[5700, 0, 8700]}>
                <mesh geometry={nodes.pasted__BD_ConcreteBlock1_RoadsGround_0_3.geometry} material={materials.RoadsGround} />
              </group>
              <group position={[7500, 0, 8700]}>
                <mesh geometry={nodes.pasted__BD_ConcreteBlock2_RoadsGround_0.geometry} material={materials.RoadsGround} />
              </group>
              <group position={[3900, 0, 8700]}>
                <mesh geometry={nodes.pasted__BD_ConcreteBlock3_RoadsGround_0.geometry} material={materials.RoadsGround} />
              </group>
            </group>
            <group position={[14400, 0, -3600]}>
              <mesh geometry={nodes.LMProjects2_pasted__group65_pasted__pCube39_LMProjects1GLOW_0_1.geometry} material={materials.LMProjects1GLOW} />
              <mesh geometry={nodes.LMProjects2_pasted__group65_pasted__pCube40_LMProjects_0_1.geometry} material={materials.LMProjects} />
              <group position={[-32373.63, 2989.81, -9336.86]} rotation={[0, -0.72, 0]} scale={[0.17, 0.26, 0.17]}>
                <mesh geometry={nodes.pasted__pCylinder1_LMProjects_0_1.geometry} material={materials.LMProjects} />
              </group>
              <mesh geometry={nodes.pasted__group75_LMProjects_0_1.geometry} material={materials.LMProjects} />
              <group position={[-30500, 20, -8950]}>
                <group position={[400, 150, 0]}>
                  <mesh geometry={nodes.pasted__pCube1_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-1300, 2550, 0]}>
                  <mesh geometry={nodes.pasted__pCube18_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-1950, 2550, 0]}>
                  <mesh geometry={nodes.pasted__pCube19_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[400, 2550, 0]}>
                  <mesh geometry={nodes.pasted__pCube20_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-2450, 2550, 0]}>
                  <mesh geometry={nodes.pasted__pCube26_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-3100, 2550, 0]}>
                  <mesh geometry={nodes.pasted__pCube27_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-3100, 150, 0]}>
                  <mesh geometry={nodes.pasted__pCube28_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-1498.95, 668.31, 191.28]} scale={[0.85, 0.54, 0.85]}>
                  <mesh geometry={nodes.pasted__pCube31_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-2645.7, 668.31, 191.28]} scale={[0.85, 0.54, 0.85]}>
                  <mesh geometry={nodes.pasted__pCube32_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-4020.8, 2823.8, 430.44]} scale={[0.88, 0.62, 0.88]}>
                  <mesh geometry={nodes.pasted__pCube52_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-3670.74, 2823.8, -444.38]} scale={[2.88, 0.62, 0.51]}>
                  <mesh geometry={nodes.pasted__pCube53_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-3670.74, 2823.8, -205.88]} scale={[2.88, 0.62, 0.51]}>
                  <mesh geometry={nodes.pasted__pCube54_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-2185.54, 2465.95, 315.55]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                  <mesh geometry={nodes.pasted__pCube55_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-2185.54, 2465.95, -265.65]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                  <mesh geometry={nodes.pasted__pCube56_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[413.49, 2823.8, 430.44]} scale={[0.88, 0.62, 0.88]}>
                  <mesh geometry={nodes.pasted__pCube57_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-2564.95, 2465.95, -265.65]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                  <mesh geometry={nodes.pasted__pCube58_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-2564.95, 2465.95, 315.55]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                  <mesh geometry={nodes.pasted__pCube59_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-1421.36, 2465.95, -265.65]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                  <mesh geometry={nodes.pasted__pCube60_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-1421.36, 2465.95, 315.55]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                  <mesh geometry={nodes.pasted__pCube61_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-1041.95, 2465.95, -265.65]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                  <mesh geometry={nodes.pasted__pCube62_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-1041.95, 2465.95, 315.55]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                  <mesh geometry={nodes.pasted__pCube63_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-525.84, 2945.76, -37.16]} scale={[0.76, 2.25, 0.11]}>
                  <mesh geometry={nodes.pasted__pCube64_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-525.84, 2945.76, -371.81]} scale={[0.76, 2.25, 0.11]}>
                  <mesh geometry={nodes.pasted__pCube65_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-525.84, 2918.94, -76.66]} scale={[0.76, 1.89, 0.11]}>
                  <mesh geometry={nodes.pasted__pCube66_LMProjects_0_1.geometry} material={materials.LMProjects} />
                </group>
                <group position={[5700, 0, 8700]}>
                  <mesh geometry={nodes.pasted__BD_ConcreteBlock1_RoadsGround_0_4.geometry} material={materials.RoadsGround} />
                </group>
                <group position={[7500, 0, 8700]}>
                  <mesh geometry={nodes.pasted__BD_ConcreteBlock2_RoadsGround_0_1.geometry} material={materials.RoadsGround} />
                </group>
                <group position={[3900, 0, 8700]}>
                  <mesh geometry={nodes.pasted__BD_ConcreteBlock3_RoadsGround_0_1.geometry} material={materials.RoadsGround} />
                </group>
              </group>
            </group>
            <group position={[-12200, 0, -10450]} rotation={[0, Math.PI / 2, 0]}>
              <group position={[0, 170, 0]}>
                <mesh geometry={nodes.pCube2_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[-1339.39, -9.7, 0]} scale={1.03}>
                <mesh geometry={nodes.polySurface1_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[-1339.31, 4.84, -11.04]} scale={1.03}>
                <group position={[780.78, 0, 0]}>
                  <mesh geometry={nodes.polySurface4_Paramount_0_1.geometry} material={materials.Paramount} />
                </group>
                <group position={[789.52, 0, 0]}>
                  <mesh geometry={nodes.polySurface9_Paramount_0_1.geometry} material={materials.Paramount} />
                </group>
                <group position={[789.52, 0, 0]}>
                  <mesh geometry={nodes.polySurface10_Paramount_0_1.geometry} material={materials.Paramount} />
                </group>
                <group position={[789.52, 0, 0]}>
                  <mesh geometry={nodes.polySurface11_Paramount_0_1.geometry} material={materials.Paramount} />
                </group>
                <group position={[789.52, 0, 0]}>
                  <mesh geometry={nodes.polySurface12_Paramount_0_1.geometry} material={materials.Paramount} />
                </group>
                <group position={[735.21, 1144.85, 622.11]} scale={[0.07, 0.14, 0.2]}>
                  <mesh geometry={nodes.pCube4_Paramount_0_1.geometry} material={materials.Paramount} />
                </group>
                <group position={[735.21, 588.03, 622.11]} scale={[0.07, 0.14, 0.2]}>
                  <mesh geometry={nodes.pCube5_Paramount_0_1.geometry} material={materials.Paramount} />
                </group>
              </group>
              <group position={[0, 470, 0]}>
                <mesh geometry={nodes.pCube6_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[-600, 0, 0]}>
                <mesh geometry={nodes.polySurface13_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[310.87, 0, 0]} scale={[0.28, 1, 1]}>
                <mesh geometry={nodes.polySurface14_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[65.72, 1340.69, -382.24]} scale={[0.29, 0.47, 0.29]}>
                <mesh geometry={nodes.pCube7_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[37.45, 3.73, -170]} scale={[0.99, 0.75, 0.99]}>
                <mesh geometry={nodes.polySurface15_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[-1300, 0, 0]}>
                <mesh geometry={nodes.polySurface16_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[431.71, 2047.19, -384.27]} scale={[0.08, 0.05, 0.08]}>
                <mesh geometry={nodes.pCylinder1_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[-0.8, 1663.44, -202.43]} rotation={[Math.PI / 2, 0, 0]} scale={[1.09, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane69_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[1200, 0, 0]}>
                <group position={[0, 170, 0]}>
                  <mesh geometry={nodes.pCube2_Paramount_0_3.geometry} material={materials.Paramount} />
                </group>
                <group position={[0, 470, 0]}>
                  <mesh geometry={nodes.pCube6_Paramount_0_3.geometry} material={materials.Paramount} />
                </group>
                <group position={[0, 470, -1200]}>
                  <mesh geometry={nodes.pCube99_Paramount_0_1.geometry} material={materials.Paramount} />
                </group>
                <group position={[0, 170, -1200]}>
                  <mesh geometry={nodes.pCube101_Paramount_0_1.geometry} material={materials.Paramount} />
                </group>
              </group>
              <group position={[0, 470, -1200]}>
                <mesh geometry={nodes.pCube98_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[0, 170, -1200]}>
                <mesh geometry={nodes.pCube100_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[0, 470, -1200]}>
                <mesh geometry={nodes.pCube102_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[-522.88, 4.84, -11.04]} scale={1.03}>
                <mesh geometry={nodes.polySurface3_Paramount1GLOW_0_1.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[-529.46, 4.84, -11.04]} scale={1.03}>
                <mesh geometry={nodes.polySurface8_Paramount1GLOW_0_1.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[-529.46, 4.84, -11.04]} scale={1.03}>
                <mesh geometry={nodes.polySurface7_Paramount1GLOW_0_1.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[-529.46, 4.84, -11.04]} scale={1.03}>
                <mesh geometry={nodes.polySurface6_Paramount1GLOW_0_1.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[-529.46, 4.84, -11.04]} scale={1.03}>
                <mesh geometry={nodes.polySurface5_Paramount1GLOW_0_1.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[396.04, 1375.22, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane68_Paramount1GLOW_0_1.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[-392.16, 770.33, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane58_Paramount1GLOW_0_1.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[2.32, 464.99, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane57_Paramount1GLOW_0_1.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[807.84, 770.33, 607.47]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane333_Paramount1GLOW_0_1.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[1050, 464.99, 607.47]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane334_Paramount1GLOW_0_1.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[396.04, 1071.37, -1205.6]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane332_Paramount1GLOW_0_1.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[-609.97, 1083.39, 435.92]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1.41, 1, 1]}>
                <mesh geometry={nodes.pPlane71_Paramount1GLOW_0_1.geometry} material={materials.Paramount1GLOW} />
              </group>
              <group position={[-391.54, 1375.22, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane62_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[2.32, 1375.22, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane67_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[-391.54, 1071.37, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane61_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[2.32, 1071.37, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane65_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[396.04, 1071.37, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane66_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[396.04, 770.33, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane64_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[2.32, 770.33, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane63_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[396.04, 464.99, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane60_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[-391.54, 464.99, 605.64]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane56_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[808.46, 464.99, 607.47]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane335_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[1050, 770.33, 607.47]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane336_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[1050, 1071.37, 607.47]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane337_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[808.46, 1071.37, 607.47]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane338_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[607.87, 1363.2, 435.92]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1.41, 1, 1]}>
                <mesh geometry={nodes.pPlane329_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[2.32, 1071.37, -1205.6]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane331_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
              <group position={[-391.54, 1071.37, -1205.6]} rotation={[Math.PI / 2, 0, 0]} scale={[1.28, 0.91, 0.91]}>
                <mesh geometry={nodes.pPlane330_Paramount_0_1.geometry} material={materials.Paramount} />
              </group>
            </group>
            <group position={[-34950, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
              <mesh geometry={nodes.polySurface750_CityProps_0.geometry} material={materials.CityProps} />
              <group position={[40.1, 2071.56, 0.6]} rotation={[Math.PI, 0, 0]} scale={0.87}>
                <mesh geometry={nodes.polySurface836_WhiteGlow_0.geometry} material={materials.WhiteGlow} />
              </group>
            </group>
            <group position={[-18800, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
              <mesh geometry={nodes.polySurface750_CityProps_0_1.geometry} material={materials.CityProps} />
              <group position={[40.1, 2071.56, 0.6]} rotation={[Math.PI, 0, 0]} scale={0.87}>
                <mesh geometry={nodes.polySurface836_WhiteGlow_0_1.geometry} material={materials.WhiteGlow} />
              </group>
            </group>
            <group position={[2913.36, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
              <mesh geometry={nodes.polySurface750_CityProps_0_2.geometry} material={materials.CityProps} />
              <group position={[40.1, 2071.56, 0.6]} rotation={[Math.PI, 0, 0]} scale={0.87}>
                <mesh geometry={nodes.polySurface836_WhiteGlow_0_2.geometry} material={materials.WhiteGlow} />
              </group>
            </group>
            <group position={[5864.18, 0, -6401.28]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.polySurface750_CityProps_0_3.geometry} material={materials.CityProps} />
              <group position={[40.1, 2071.56, 0.6]} rotation={[Math.PI, 0, 0]} scale={0.87}>
                <mesh geometry={nodes.polySurface836_WhiteGlow_0_3.geometry} material={materials.WhiteGlow} />
              </group>
            </group>
            <group position={[-4794.79, 0, -6401.28]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.polySurface750_CityProps_0_4.geometry} material={materials.CityProps} />
              <group position={[40.1, 2071.56, 0.6]} rotation={[Math.PI, 0, 0]} scale={0.87}>
                <mesh geometry={nodes.polySurface836_WhiteGlow_0_4.geometry} material={materials.WhiteGlow} />
              </group>
            </group>
            <group position={[-17835.59, 0, -6401.28]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.polySurface750_CityProps_0_5.geometry} material={materials.CityProps} />
              <group position={[40.1, 2071.56, 0.6]} rotation={[Math.PI, 0, 0]} scale={0.87}>
                <mesh geometry={nodes.polySurface836_WhiteGlow_0_5.geometry} material={materials.WhiteGlow} />
              </group>
            </group>
            <group position={[-25983.96, 0, -6401.28]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.polySurface750_CityProps_0_6.geometry} material={materials.CityProps} />
              <group position={[40.1, 2071.56, 0.6]} rotation={[Math.PI, 0, 0]} scale={0.87}>
                <mesh geometry={nodes.polySurface836_WhiteGlow_0_6.geometry} material={materials.WhiteGlow} />
              </group>
            </group>
            <group position={[-31808.14, 0, -6401.28]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.polySurface750_CityProps_0_7.geometry} material={materials.CityProps} />
              <group position={[40.1, 2071.56, 0.6]} rotation={[Math.PI, 0, 0]} scale={0.87}>
                <mesh geometry={nodes.polySurface836_WhiteGlow_0_7.geometry} material={materials.WhiteGlow} />
              </group>
            </group>
            <group position={[-14400, 0, 0]}>
              <group position={[-15050, 0, -6400]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_4.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_4.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_4.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_4.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_4.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_8.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_8.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_24.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_RedGLOW_0_3.geometry} material={materials.RedGLOW} />
                <mesh geometry={nodes.polySurface262_CityProps_0_25.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_17.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_26.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_18.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface750_CityProps_0_12.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_9.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_9.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_27.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_RedGLOW_0_4.geometry} material={materials.RedGLOW} />
                <mesh geometry={nodes.polySurface262_CityProps_0_28.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_19.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_29.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_20.geometry} material={materials.CityProps} />
              </group>
              <group position={[-15050, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_5.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_5.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_5.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_5.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_5.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_10.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_10.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_30.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_21.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_31.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_22.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_32.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_4.geometry} material={materials.GreenGlow} />
                <mesh geometry={nodes.polySurface750_CityProps_0_13.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_11.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_11.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_33.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_23.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_34.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_24.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_35.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_5.geometry} material={materials.GreenGlow} />
              </group>
              <group position={[-13550, 0, -7900]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_6.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_6.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_6.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_6.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_6.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_12.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_12.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_36.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_25.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_37.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_26.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_38.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_27.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface750_CityProps_0_14.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_13.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_13.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_39.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_RedGLOW_0_5.geometry} material={materials.RedGLOW} />
                <mesh geometry={nodes.polySurface262_CityProps_0_40.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_28.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_41.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_29.geometry} material={materials.CityProps} />
              </group>
              <group position={[-13550, 0, -6400]} rotation={[0, Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_7.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_7.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_7.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_7.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_7.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_14.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_14.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_42.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_30.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_43.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_31.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_44.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_6.geometry} material={materials.GreenGlow} />
                <mesh geometry={nodes.polySurface750_CityProps_0_15.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_15.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_15.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_45.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_32.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_46.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_33.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_47.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_7.geometry} material={materials.GreenGlow} />
              </group>
              <group position={[-22656.9, 0, 7394.79]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface839_WhiteGlow1_0_1.geometry} material={materials.WhiteGlow1} />
              </group>
              <group position={[-28598.89, 0, -14300.7]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh geometry={nodes.polySurface838_WhiteGlow1_0_1.geometry} material={materials.WhiteGlow1} />
              </group>
              <group position={[-21450.22, 0, 7149.48]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface837_WhiteGlow1_0_1.geometry} material={materials.WhiteGlow1} />
              </group>
              <mesh geometry={nodes.polySurface750_WhiteGlow1_0_1.geometry} material={materials.WhiteGlow1} />
            </group>
            <group position={[14400, 0, 0]}>
              <group position={[-15050, 0, -6400]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_8.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_8.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_8.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_8.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_8.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_16.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_16.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_48.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_RedGLOW_0_6.geometry} material={materials.RedGLOW} />
                <mesh geometry={nodes.polySurface262_CityProps_0_49.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_34.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_50.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_35.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface750_CityProps_0_16.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_17.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_17.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_51.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_RedGLOW_0_7.geometry} material={materials.RedGLOW} />
                <mesh geometry={nodes.polySurface262_CityProps_0_52.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_36.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_53.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_37.geometry} material={materials.CityProps} />
              </group>
              <group position={[-15050, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_9.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_9.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_9.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_9.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_9.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_18.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_18.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_54.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_38.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_55.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_39.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_56.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_8.geometry} material={materials.GreenGlow} />
                <mesh geometry={nodes.polySurface750_CityProps_0_17.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_19.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_19.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_57.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_40.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_58.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_41.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_59.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_9.geometry} material={materials.GreenGlow} />
              </group>
              <group position={[-13550, 0, -7900]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_10.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_10.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_10.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_10.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_10.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_20.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_20.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_60.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_42.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_61.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_43.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_62.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_44.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface750_CityProps_0_18.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_21.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_21.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_63.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_RedGLOW_0_8.geometry} material={materials.RedGLOW} />
                <mesh geometry={nodes.polySurface262_CityProps_0_64.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_45.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_65.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_46.geometry} material={materials.CityProps} />
              </group>
              <group position={[-13550, 0, -6400]} rotation={[0, Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_11.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_11.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_11.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_11.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_11.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_22.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_22.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_66.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_47.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_67.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_48.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_68.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_10.geometry} material={materials.GreenGlow} />
                <mesh geometry={nodes.polySurface750_CityProps_0_19.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_23.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_23.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_69.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_49.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_70.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_50.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_71.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_11.geometry} material={materials.GreenGlow} />
              </group>
              <group position={[-22656.9, 0, 7394.79]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface839_WhiteGlow1_0_2.geometry} material={materials.WhiteGlow1} />
              </group>
              <group position={[-28598.89, 0, -14300.7]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh geometry={nodes.polySurface838_WhiteGlow1_0_2.geometry} material={materials.WhiteGlow1} />
              </group>
              <group position={[-21450.22, 0, 7149.48]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface837_WhiteGlow1_0_2.geometry} material={materials.WhiteGlow1} />
              </group>
              <mesh geometry={nodes.polySurface750_WhiteGlow1_0_2.geometry} material={materials.WhiteGlow1} />
            </group>
            <group position={[-14250, 0, 7150]} rotation={[0, -Math.PI / 2, 0]}>
              <group position={[-15050, 0, -6400]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_12.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_12.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_12.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_12.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_12.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_24.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_24.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_72.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_RedGLOW_0_9.geometry} material={materials.RedGLOW} />
                <mesh geometry={nodes.polySurface262_CityProps_0_73.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_51.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_74.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_52.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface750_CityProps_0_20.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_25.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_25.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_75.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_RedGLOW_0_10.geometry} material={materials.RedGLOW} />
                <mesh geometry={nodes.polySurface262_CityProps_0_76.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_53.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_77.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_54.geometry} material={materials.CityProps} />
              </group>
              <group position={[-15050, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_13.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_13.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_13.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_13.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_13.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_26.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_26.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_78.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_55.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_79.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_56.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_80.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_12.geometry} material={materials.GreenGlow} />
                <mesh geometry={nodes.polySurface750_CityProps_0_21.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_27.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_27.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_81.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_57.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_82.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_58.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_83.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_13.geometry} material={materials.GreenGlow} />
              </group>
              <group position={[-13550, 0, -7900]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_14.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_14.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_14.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_14.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_14.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_28.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_28.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_84.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_59.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_85.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_60.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_86.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_61.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface750_CityProps_0_22.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_29.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_29.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_87.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_RedGLOW_0_11.geometry} material={materials.RedGLOW} />
                <mesh geometry={nodes.polySurface262_CityProps_0_88.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_62.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_89.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_63.geometry} material={materials.CityProps} />
              </group>
              <group position={[-13550, 0, -6400]} rotation={[0, Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_15.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_15.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_15.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_15.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_15.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_30.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_30.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_90.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_64.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_91.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_65.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_92.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_14.geometry} material={materials.GreenGlow} />
                <mesh geometry={nodes.polySurface750_CityProps_0_23.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_31.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_31.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_93.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_66.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_94.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_67.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_95.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_15.geometry} material={materials.GreenGlow} />
              </group>
              <group position={[-22656.9, 0, 7394.79]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface839_WhiteGlow1_0_3.geometry} material={materials.WhiteGlow1} />
              </group>
              <group position={[-28598.89, 0, -14300.7]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh geometry={nodes.polySurface838_WhiteGlow1_0_3.geometry} material={materials.WhiteGlow1} />
              </group>
              <group position={[-21450.22, 0, 7149.48]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface837_WhiteGlow1_0_3.geometry} material={materials.WhiteGlow1} />
              </group>
              <mesh geometry={nodes.polySurface750_WhiteGlow1_0_3.geometry} material={materials.WhiteGlow1} />
            </group>
            <group position={[-30450, 0, 7150]} rotation={[0, -Math.PI / 2, 0]}>
              <group position={[-15050, 0, -6400]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_16.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_16.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_16.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_16.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_16.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_32.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_32.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_96.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_RedGLOW_0_12.geometry} material={materials.RedGLOW} />
                <mesh geometry={nodes.polySurface262_CityProps_0_97.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_68.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_98.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_69.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface750_CityProps_0_24.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_33.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_33.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_99.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_RedGLOW_0_13.geometry} material={materials.RedGLOW} />
                <mesh geometry={nodes.polySurface262_CityProps_0_100.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_70.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_101.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_71.geometry} material={materials.CityProps} />
              </group>
              <group position={[-13550, 0, -7900]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_17.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_17.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_17.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_17.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_17.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_34.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_34.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_102.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_72.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_103.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_73.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_104.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_74.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface750_CityProps_0_25.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_35.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_35.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_105.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_RedGLOW_0_14.geometry} material={materials.RedGLOW} />
                <mesh geometry={nodes.polySurface262_CityProps_0_106.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_75.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_107.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_76.geometry} material={materials.CityProps} />
              </group>
              <group position={[-13550, 0, -6400]} rotation={[0, Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_18.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_18.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_18.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_18.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_18.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_36.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_36.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_108.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_77.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_109.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_78.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_110.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_16.geometry} material={materials.GreenGlow} />
                <mesh geometry={nodes.polySurface750_CityProps_0_26.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_37.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_37.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_111.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_79.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_112.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_80.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_113.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_17.geometry} material={materials.GreenGlow} />
              </group>
              <group position={[-28598.89, 0, -14300.7]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh geometry={nodes.polySurface838_WhiteGlow1_0_4.geometry} material={materials.WhiteGlow1} />
              </group>
              <group position={[-21450.22, 0, 7149.48]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface837_WhiteGlow1_0_4.geometry} material={materials.WhiteGlow1} />
              </group>
              <mesh geometry={nodes.polySurface750_WhiteGlow1_0_4.geometry} material={materials.WhiteGlow1} />
            </group>
            <group position={[-7350, 0, 0]}>
              <group position={[-15050, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_19.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_19.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_19.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_19.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_19.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_38.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_38.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_114.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_81.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_115.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_82.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_116.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_18.geometry} material={materials.GreenGlow} />
                <mesh geometry={nodes.polySurface750_CityProps_0_27.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_39.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_39.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_117.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_83.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_118.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_84.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_119.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_19.geometry} material={materials.GreenGlow} />
              </group>
              <group position={[-13550, 0, -7900]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_20.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_20.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_20.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_20.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_20.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_40.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_40.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_120.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_85.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_121.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_86.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_122.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_87.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface750_CityProps_0_28.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_41.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_41.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_123.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_RedGLOW_0_15.geometry} material={materials.RedGLOW} />
                <mesh geometry={nodes.polySurface262_CityProps_0_124.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_88.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_125.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_89.geometry} material={materials.CityProps} />
              </group>
              <group position={[-13550, 0, -6400]} rotation={[0, Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_21.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_21.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_21.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_21.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_21.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_42.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_42.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_126.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_90.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_127.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_91.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_128.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_20.geometry} material={materials.GreenGlow} />
                <mesh geometry={nodes.polySurface750_CityProps_0_29.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_43.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_43.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_129.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_92.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_130.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_93.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_131.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_21.geometry} material={materials.GreenGlow} />
              </group>
              <group position={[-22656.9, 0, 7394.79]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface839_WhiteGlow1_0_4.geometry} material={materials.WhiteGlow1} />
              </group>
              <group position={[-21450.22, 0, 7149.48]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface837_WhiteGlow1_0_5.geometry} material={materials.WhiteGlow1} />
              </group>
              <mesh geometry={nodes.polySurface750_WhiteGlow1_0_5.geometry} material={materials.WhiteGlow1} />
            </group>
            <group position={[-23400, 0, 0]}>
              <group position={[-15050, 0, -6400]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_22.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_22.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_22.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_22.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_22.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_44.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_44.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_132.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_RedGLOW_0_16.geometry} material={materials.RedGLOW} />
                <mesh geometry={nodes.polySurface262_CityProps_0_133.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_94.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_134.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_95.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface750_CityProps_0_30.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_45.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_45.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_135.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_RedGLOW_0_17.geometry} material={materials.RedGLOW} />
                <mesh geometry={nodes.polySurface262_CityProps_0_136.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_96.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_137.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_97.geometry} material={materials.CityProps} />
              </group>
              <group position={[-15050, 0, -7900]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_23.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_23.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_23.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_23.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_23.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_46.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_46.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_138.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_98.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_139.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_99.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_140.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_22.geometry} material={materials.GreenGlow} />
                <mesh geometry={nodes.polySurface750_CityProps_0_31.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_47.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_47.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_141.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_100.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_142.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_101.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_143.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_GreenGlow_0_23.geometry} material={materials.GreenGlow} />
              </group>
              <group position={[-13550, 0, -7900]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh geometry={nodes.polySurface260_CityProps_0_24.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface261_CityProps_0_24.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps_0_24.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface791_CityProps1GLOW_0_24.geometry} material={materials.CityProps1GLOW} />
                <mesh geometry={nodes.polySurface259_CityProps_0_24.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_48.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_48.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_144.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_102.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_145.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_103.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_146.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_104.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface750_CityProps_0_32.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface752_CityProps_0_49.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface264_CityProps_0_49.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_147.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_RedGLOW_0_18.geometry} material={materials.RedGLOW} />
                <mesh geometry={nodes.polySurface262_CityProps_0_148.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_105.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface262_CityProps_0_149.geometry} material={materials.CityProps} />
                <mesh geometry={nodes.polySurface739_CityProps_0_106.geometry} material={materials.CityProps} />
              </group>
              <group position={[-22656.9, 0, 7394.79]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh geometry={nodes.polySurface839_WhiteGlow1_0_5.geometry} material={materials.WhiteGlow1} />
              </group>
              <group position={[-28598.89, 0, -14300.7]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh geometry={nodes.polySurface838_WhiteGlow1_0_5.geometry} material={materials.WhiteGlow1} />
              </group>
              <mesh geometry={nodes.polySurface750_WhiteGlow1_0_6.geometry} material={materials.WhiteGlow1} />
            </group>
            <group position={[-12750, 0, -9200]}>
              <group position={[0, 29.25, 0]}>
                <mesh geometry={nodes.pasted__pPlane94_Laundrymat_0.geometry} material={materials.Laundrymat} />
              </group>
              <mesh geometry={nodes.pasted__polySurface254_Laundrymat_0.geometry} material={materials.Laundrymat} />
              <group position={[-393.8, 66.2, 510.85]} scale={[1.31, 0.07, 1]}>
                <mesh geometry={nodes.pasted__pCube67_Laundrymat_0.geometry} material={materials.Laundrymat} />
              </group>
              <group position={[-296.3, 66.2, 510.85]} scale={[1.31, 0.07, 1]}>
                <mesh geometry={nodes.pasted__pCube79_Laundrymat_0.geometry} material={materials.Laundrymat} />
              </group>
              <group position={[-198.49, 66.2, 510.85]} scale={[1.31, 0.07, 1]}>
                <mesh geometry={nodes.pasted__pCube80_Laundrymat_0.geometry} material={materials.Laundrymat} />
              </group>
              <group position={[-99.68, 66.2, 510.85]} scale={[1.31, 0.07, 1]}>
                <mesh geometry={nodes.pasted__pCube81_Laundrymat_0.geometry} material={materials.Laundrymat} />
              </group>
              <group position={[0, -100.63, 39.16]} scale={[1.44, 1, 1.39]}>
                <mesh geometry={nodes.pasted__polySurface255_Laundrymat_0.geometry} material={materials.Laundrymat} />
              </group>
              <group position={[122.85, 1.1, 206.99]} scale={0.8}>
                <group position={[627.21, 1309.44, 196.23]} scale={[1, 1, 0.91]}>
                  <mesh geometry={nodes.pasted__pCube23_Laundrymat_0.geometry} material={materials.Laundrymat} />
                </group>
                <group position={[608.16, 598.99, 102.37]} scale={[0.67, 0.67, 0.84]}>
                  <mesh geometry={nodes.pasted__pCylinder7_Laundrymat_0.geometry} material={materials.Laundrymat} />
                </group>
              </group>
              <group position={[-122.85, 1.1, 399.91]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.8}>
                <group position={[627.21, 1309.44, 196.23]} scale={[1, 1, 0.91]}>
                  <mesh geometry={nodes.pasted__pCube23_Laundrymat_0_1.geometry} material={materials.Laundrymat} />
                </group>
                <group position={[608.16, 598.99, 102.37]} scale={[0.67, 0.67, 0.84]}>
                  <mesh geometry={nodes.pasted__pCylinder7_Laundrymat_0_1.geometry} material={materials.Laundrymat} />
                </group>
              </group>
              <group position={[-328.34, 0, 0]}>
                <group position={[1.68, 546.66, -144.02]} scale={[497.1, 47.62, 497.1]}>
                  <mesh geometry={nodes.pasted__pCube69_Laundrymat_0.geometry} material={materials.Laundrymat} />
                </group>
                <group position={[1.61, 604.64, -143.99]} rotation={[0, -0.84, 0]} scale={[209.75, 240.22, 209.75]}>
                  <mesh geometry={nodes.pasted__pCube72_Laundrymat_0.geometry} material={materials.Laundrymat} />
                </group>
                <group position={[1.64, 654.63, -144.02]} scale={[323.23, 30.96, 323.23]}>
                  <mesh geometry={nodes.pasted__pCube71_Laundrymat_0.geometry} material={materials.Laundrymat} />
                </group>
              </group>
              <group position={[-148.38, 42.68, 512.56]}>
                <mesh geometry={nodes.pasted__pCube82_Laundrymat_0.geometry} material={materials.Laundrymat} />
              </group>
              <group position={[-1.12, 0, 0]}>
                <group position={[1.68, 546.66, -144.02]} scale={[497.1, 47.62, 497.1]}>
                  <mesh geometry={nodes.pasted__pCube69_Laundrymat_0_1.geometry} material={materials.Laundrymat} />
                </group>
                <group position={[1.61, 604.64, -143.99]} rotation={[0, -0.84, 0]} scale={[209.75, 240.22, 209.75]}>
                  <mesh geometry={nodes.pasted__pCube72_Laundrymat_0_1.geometry} material={materials.Laundrymat} />
                </group>
                <group position={[1.64, 654.63, -144.02]} scale={[323.23, 30.96, 323.23]}>
                  <mesh geometry={nodes.pasted__pCube71_Laundrymat_0_1.geometry} material={materials.Laundrymat} />
                </group>
              </group>
              <group position={[330.8, 0, 0]}>
                <group position={[1.68, 546.66, -144.02]} scale={[497.1, 47.62, 497.1]}>
                  <mesh geometry={nodes.pasted__pCube69_Laundrymat_0_2.geometry} material={materials.Laundrymat} />
                </group>
                <group position={[1.61, 604.64, -143.99]} rotation={[0, -0.84, 0]} scale={[209.75, 240.22, 209.75]}>
                  <mesh geometry={nodes.pasted__pCube72_Laundrymat_0_2.geometry} material={materials.Laundrymat} />
                </group>
                <group position={[1.64, 654.63, -144.02]} scale={[323.23, 30.96, 323.23]}>
                  <mesh geometry={nodes.pasted__pCube71_Laundrymat_0_2.geometry} material={materials.Laundrymat} />
                </group>
              </group>
              <group position={[39.94, 0, 8.47]}>
                <group position={[-200, 663.29, 435.05]} rotation={[Math.PI / 2, 0, 0]} scale={[1.19, 0.84, 1.19]}>
                  <mesh geometry={nodes.pasted__pCylinder8_Laundrymat_0.geometry} material={materials.Laundrymat} />
                </group>
                <group position={[-163.7, 875.25, 457.2]} rotation={[Math.PI / 2, 0, 0]} scale={[0.3, 0.4, 0.3]}>
                  <mesh geometry={nodes.pasted__pCylinder10_Laundrymat_0.geometry} material={materials.Laundrymat} />
                </group>
                <group position={[-85.93, 827.85, 459.81]} rotation={[Math.PI / 2, 0, 0]} scale={[0.21, 0.28, 0.21]}>
                  <mesh geometry={nodes.pasted__pCylinder11_Laundrymat_0.geometry} material={materials.Laundrymat} />
                </group>
                <group position={[144.3, 682.29, 435.96]} rotation={[Math.PI / 2, 0, 0]} scale={[0.94, 0.49, 0.94]}>
                  <mesh geometry={nodes.pasted__pCylinder9_Laundrymat_0.geometry} material={materials.Laundrymat} />
                </group>
              </group>
              <group position={[7750, 20, 8950]}>
                <mesh geometry={nodes.pasted__BD_Block86_Laundrymat_0.geometry} material={materials.Laundrymat} />
              </group>
              <group position={[-541.35, 25.1, 5826.28]} scale={[0.01, 0.52, 0.52]}>
                <mesh geometry={nodes.pasted__BD_Block87_Laundrymat_0.geometry} material={materials.Laundrymat} />
              </group>
              <group position={[-236.06, 25.1, 5826.28]} scale={[0.01, 0.52, 0.52]}>
                <mesh geometry={nodes.pasted__BD_Block88_Laundrymat_0.geometry} material={materials.Laundrymat} />
              </group>
              <group position={[69.24, 25.1, 5826.28]} scale={[0.01, 0.52, 0.52]}>
                <mesh geometry={nodes.pasted__BD_Block89_Laundrymat_0.geometry} material={materials.Laundrymat} />
              </group>
              <group position={[374.53, 25.1, 5826.28]} scale={[0.01, 0.52, 0.52]}>
                <mesh geometry={nodes.pasted__BD_Block90_Laundrymat_0.geometry} material={materials.Laundrymat} />
              </group>
              <group position={[679.82, 25.1, 5826.28]} scale={[0.01, 0.52, 0.52]}>
                <mesh geometry={nodes.pasted__BD_Block91_Laundrymat_0.geometry} material={materials.Laundrymat} />
              </group>
              <group position={[12750, 0, 9200]}>
                <mesh geometry={nodes.LM_Laundrette_pasted__pCube65_Laundrymat_0.geometry} material={materials.Laundrymat} />
              </group>
            </group>
            <group position={[-1700, 0, -8950]}>
              <group position={[0, 20, 0]}>
                <mesh geometry={nodes.pasted__polySurface1_RoadsGround_0.geometry} material={materials.RoadsGround} />
              </group>
              <group position={[-1800, 20, 0]}>
                <mesh geometry={nodes.pasted__polySurface2_RoadsGround_0.geometry} material={materials.RoadsGround} />
              </group>
              <group position={[-3600, 20, 0]}>
                <mesh geometry={nodes.pasted__polySurface4_RoadsGround_0.geometry} material={materials.RoadsGround} />
              </group>
              <group position={[-3550, 425, -150]}>
                <mesh geometry={nodes.pasted__pCube1_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[0, 650, 0]}>
                <mesh geometry={nodes.pasted__pCube2_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-1800, 650, 0]}>
                <mesh geometry={nodes.pasted__pCube3_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-4197.29, 1040.73, -136.89]} scale={[0.61, 0.64, 0.69]}>
                <mesh geometry={nodes.pasted__pCube4_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-4401.62, 593.9, -36.83]} scale={[0.17, 2.57, 0.09]}>
                <mesh geometry={nodes.pasted__pCube5_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-3490.6, 949.33, 170.82]} scale={[1.17, 0.23, 0.39]}>
                <mesh geometry={nodes.pasted__pCube7_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <mesh geometry={nodes.pasted__polySurface5_FishFactory_0.geometry} material={materials.FishFactory} />
              <mesh geometry={nodes.pasted__polySurface7_FishFactory_0.geometry} material={materials.FishFactory} />
              <group position={[-1018.37, 149.07, 0]} scale={[0.43, 1, 1]}>
                <mesh geometry={nodes.pasted__polySurface8_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[0, 50.02, 158.2]} scale={[1, 1, 0.59]}>
                <group position={[0, 0, 406.34]}>
                  <mesh geometry={nodes.pasted__polySurface11_FishFactory_0.geometry} material={materials.FishFactory} />
                </group>
                <group position={[0, 0, 406.34]}>
                  <mesh geometry={nodes.pasted__polySurface12_FishFactory_0.geometry} material={materials.FishFactory} />
                </group>
              </group>
              <group position={[-4045.2, 1180.86, 356.18]} scale={[0.09, 1.27, 0.05]}>
                <mesh geometry={nodes.pasted__pCube9_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-4045.2, 1511.44, 356.18]} scale={[0.09, 0.21, 0.05]}>
                <mesh geometry={nodes.pasted__pCube12_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-4401.62, 593.9, -216.86]} scale={[0.17, 2.57, 0.09]}>
                <mesh geometry={nodes.pasted__pCube13_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-4197.29, 1097.17, -12.23]} scale={[0.23, 0.13, 0.26]}>
                <mesh geometry={nodes.pasted__pCube14_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-4197.29, 1097.17, -410.33]} scale={[0.23, 0.13, 0.26]}>
                <mesh geometry={nodes.pasted__pCube15_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-2796.21, 101.57, 666.8]} scale={[0.37, 0.37, 0.47]}>
                <mesh geometry={nodes.pasted__pCube16_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-3490.6, 949.33, -366.89]} scale={[1.17, 0.23, 0.39]}>
                <mesh geometry={nodes.pasted__pCube17_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-3571.48, 1180.86, 356.18]} scale={[0.09, 1.27, 0.05]}>
                <mesh geometry={nodes.pasted__pCube18_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-3077.29, 1180.86, 356.18]} scale={[0.09, 1.27, 0.05]}>
                <mesh geometry={nodes.pasted__pCube19_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[275.95, 0, 0]} scale={[1.15, 1, 1]}>
                <mesh geometry={nodes.pasted__polySurface6_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <mesh geometry={nodes.pasted__polySurface13_FishFactory_0.geometry} material={materials.FishFactory} />
              <mesh geometry={nodes.pasted__polySurface14_FishFactory_0.geometry} material={materials.FishFactory} />
              <group position={[1800, 0, 0]}>
                <group position={[275.95, 0, 0]} scale={[1.15, 1, 1]}>
                  <mesh geometry={nodes.pasted__polySurface6_FishFactory_0_1.geometry} material={materials.FishFactory} />
                </group>
                <mesh geometry={nodes.pasted__polySurface13_FishFactory_0_1.geometry} material={materials.FishFactory} />
                <mesh geometry={nodes.pasted__polySurface14_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <mesh geometry={nodes.pasted__polySurface17_FishFactory_0.geometry} material={materials.FishFactory} />
              <group position={[-1626.58, 101.9, 578.28]} scale={[0.4, 0.37, 0.36]}>
                <mesh geometry={nodes.pasted__pCube20_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-1417.61, 60.77, 496.44]} scale={[0.4, 0.18, 0.36]}>
                <mesh geometry={nodes.pasted__pCube21_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-2281.26, 0, 0]} scale={[0.36, 1, 1]}>
                <mesh geometry={nodes.pasted__polySurface18_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <mesh geometry={nodes.pasted__polySurface21_FishFactory_0.geometry} material={materials.FishFactory} />
              <mesh geometry={nodes.pasted__polySurface22_FishFactory_0.geometry} material={materials.FishFactory} />
              <mesh geometry={nodes.pasted__polySurface23_FishFactory_0.geometry} material={materials.FishFactory} />
              <mesh geometry={nodes.pasted__polySurface24_FishFactory_0.geometry} material={materials.FishFactory} />
              <mesh geometry={nodes.pasted__polySurface25_FishFactory_0.geometry} material={materials.FishFactory} />
              <group position={[0, -162.56, -48.37]} scale={[1, 0.96, 1]}>
                <mesh geometry={nodes.pasted__polySurface26_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <mesh geometry={nodes.pasted__polySurface28_FishFactory_0.geometry} material={materials.FishFactory} />
              <group position={[-2469.04, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube22_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-2119.08, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube23_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-1779.26, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube24_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-1446.65, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube25_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-1113.31, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube26_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-675.84, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube27_FishFactory1GLOW_0.geometry} material={materials.FishFactory1GLOW} />
              </group>
              <group position={[-325.88, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube28_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[13.95, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube29_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[346.56, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube30_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[679.89, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube31_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-2612.57, 483.6, 666.8]} scale={[0.37, 0.37, 0.47]}>
                <mesh geometry={nodes.pasted__pCube32_FishFactory_0.geometry} material={materials.FishFactory} />
              </group>
            </group>
            <group position={[-1700, 0, -10750]} rotation={[0, -Math.PI / 2, 0]}>
              <group position={[0, 20, 0]}>
                <mesh geometry={nodes.pasted__polySurface1_RoadsGround_0_1.geometry} material={materials.RoadsGround} />
              </group>
              <group position={[-1800, 20, 0]}>
                <mesh geometry={nodes.pasted__polySurface2_RoadsGround_0_1.geometry} material={materials.RoadsGround} />
              </group>
              <group position={[-3600, 20, 0]}>
                <mesh geometry={nodes.pasted__polySurface4_RoadsGround_0_1.geometry} material={materials.RoadsGround} />
              </group>
              <group position={[-3550, 425, -150]}>
                <mesh geometry={nodes.pasted__pCube1_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[0, 650, 0]}>
                <mesh geometry={nodes.pasted__pCube2_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-1800, 650, 0]}>
                <mesh geometry={nodes.pasted__pCube3_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-4197.29, 1040.73, -136.89]} scale={[0.61, 0.64, 0.69]}>
                <mesh geometry={nodes.pasted__pCube4_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-4401.62, 593.9, -36.83]} scale={[0.17, 2.57, 0.09]}>
                <mesh geometry={nodes.pasted__pCube5_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-3490.6, 949.33, 170.82]} scale={[1.17, 0.23, 0.39]}>
                <mesh geometry={nodes.pasted__pCube7_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <mesh geometry={nodes.pasted__polySurface5_FishFactory_0_1.geometry} material={materials.FishFactory} />
              <mesh geometry={nodes.pasted__polySurface7_FishFactory_0_1.geometry} material={materials.FishFactory} />
              <group position={[-1018.37, 149.07, 0]} scale={[0.43, 1, 1]}>
                <mesh geometry={nodes.pasted__polySurface8_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[0, 50.02, 158.2]} scale={[1, 1, 0.59]}>
                <group position={[0, 0, 406.34]}>
                  <mesh geometry={nodes.pasted__polySurface11_FishFactory_0_1.geometry} material={materials.FishFactory} />
                </group>
                <group position={[0, 0, 406.34]}>
                  <mesh geometry={nodes.pasted__polySurface12_FishFactory_0_1.geometry} material={materials.FishFactory} />
                </group>
              </group>
              <group position={[-4045.2, 1180.86, 356.18]} scale={[0.09, 1.27, 0.05]}>
                <mesh geometry={nodes.pasted__pCube9_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-4045.2, 1511.44, 356.18]} scale={[0.09, 0.21, 0.05]}>
                <mesh geometry={nodes.pasted__pCube12_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-4401.62, 593.9, -216.86]} scale={[0.17, 2.57, 0.09]}>
                <mesh geometry={nodes.pasted__pCube13_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-4197.29, 1097.17, -12.23]} scale={[0.23, 0.13, 0.26]}>
                <mesh geometry={nodes.pasted__pCube14_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-4197.29, 1097.17, -410.33]} scale={[0.23, 0.13, 0.26]}>
                <mesh geometry={nodes.pasted__pCube15_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-2796.21, 101.57, 666.8]} scale={[0.37, 0.37, 0.47]}>
                <mesh geometry={nodes.pasted__pCube16_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-3490.6, 949.33, -366.89]} scale={[1.17, 0.23, 0.39]}>
                <mesh geometry={nodes.pasted__pCube17_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-3571.48, 1180.86, 356.18]} scale={[0.09, 1.27, 0.05]}>
                <mesh geometry={nodes.pasted__pCube18_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-3077.29, 1180.86, 356.18]} scale={[0.09, 1.27, 0.05]}>
                <mesh geometry={nodes.pasted__pCube19_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[275.95, 0, 0]} scale={[1.15, 1, 1]}>
                <mesh geometry={nodes.pasted__polySurface6_FishFactory_0_2.geometry} material={materials.FishFactory} />
              </group>
              <mesh geometry={nodes.pasted__polySurface13_FishFactory_0_2.geometry} material={materials.FishFactory} />
              <mesh geometry={nodes.pasted__polySurface14_FishFactory_0_2.geometry} material={materials.FishFactory} />
              <group position={[1800, 0, 0]}>
                <group position={[275.95, 0, 0]} scale={[1.15, 1, 1]}>
                  <mesh geometry={nodes.pasted__polySurface6_FishFactory_0_3.geometry} material={materials.FishFactory} />
                </group>
                <mesh geometry={nodes.pasted__polySurface13_FishFactory_0_3.geometry} material={materials.FishFactory} />
                <mesh geometry={nodes.pasted__polySurface14_FishFactory_0_3.geometry} material={materials.FishFactory} />
              </group>
              <mesh geometry={nodes.pasted__polySurface17_FishFactory_0_1.geometry} material={materials.FishFactory} />
              <group position={[-1626.58, 101.9, 578.28]} scale={[0.4, 0.37, 0.36]}>
                <mesh geometry={nodes.pasted__pCube20_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-1417.61, 60.77, 496.44]} scale={[0.4, 0.18, 0.36]}>
                <mesh geometry={nodes.pasted__pCube21_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-2281.26, 0, 0]} scale={[0.36, 1, 1]}>
                <mesh geometry={nodes.pasted__polySurface18_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <mesh geometry={nodes.pasted__polySurface21_FishFactory_0_1.geometry} material={materials.FishFactory} />
              <mesh geometry={nodes.pasted__polySurface22_FishFactory_0_1.geometry} material={materials.FishFactory} />
              <mesh geometry={nodes.pasted__polySurface23_FishFactory_0_1.geometry} material={materials.FishFactory} />
              <mesh geometry={nodes.pasted__polySurface24_FishFactory_0_1.geometry} material={materials.FishFactory} />
              <mesh geometry={nodes.pasted__polySurface25_FishFactory_0_1.geometry} material={materials.FishFactory} />
              <group position={[0, -162.56, -48.37]} scale={[1, 0.96, 1]}>
                <mesh geometry={nodes.pasted__polySurface26_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <mesh geometry={nodes.pasted__polySurface28_FishFactory_0_1.geometry} material={materials.FishFactory} />
              <group position={[-2469.04, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube22_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-2119.08, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube23_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-1779.26, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube24_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-1446.65, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube25_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-1113.31, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube26_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-675.84, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube27_FishFactory1GLOW_0_1.geometry} material={materials.FishFactory1GLOW} />
              </group>
              <group position={[-325.88, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube28_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[13.95, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube29_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[346.56, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube30_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[679.89, 1106.12, 737.89]} scale={[0.26, 0.65, 0.26]}>
                <mesh geometry={nodes.pasted__pCube31_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
              <group position={[-2612.57, 483.6, 666.8]} scale={[0.37, 0.37, 0.47]}>
                <mesh geometry={nodes.pasted__pCube32_FishFactory_0_1.geometry} material={materials.FishFactory} />
              </group>
            </group>
            <group position={[-25100, 0, -8950]}>
              <group position={[0, 450, -100]}>
                <mesh geometry={nodes.pasted__pCube80_Pawnshop_0.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[25, 650, -100]}>
                <mesh geometry={nodes.pasted__pCube81_Pawnshop_0.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[0, 1400, -100]}>
                <mesh geometry={nodes.pasted__polySurface804_Pawnshop_0.geometry} material={materials.Pawnshop} />
                <mesh geometry={nodes.pasted__polySurface805_Pawnshop_0.geometry} material={materials.Pawnshop} />
                <mesh geometry={nodes.pasted__polySurface806_Pawnshop_0.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[0, 509.63, -100]} scale={[1.01, 0.23, 1.02]}>
                <mesh geometry={nodes.pasted__pCube84_Pawnshop_0.geometry} material={materials.Pawnshop} />
              </group>
              <mesh geometry={nodes.pasted__loftedSurface3_Pawnshop_0.geometry} material={materials.Pawnshop} />
              <mesh geometry={nodes.pasted__loftedSurface3_Pawnshop1GLOW_0.geometry} material={materials.Pawnshop1GLOW} />
              <group position={[-750, 999.67, 626.6]} scale={[0.88, 1.18, 0.53]}>
                <mesh geometry={nodes.pasted__pCube85_Pawnshop_0.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[-2.65, 895.87, 802.3]} scale={[0.4, 0.93, 2.98]}>
                <mesh geometry={nodes.pasted__pCube88_Pawnshop_0.geometry} material={materials.Pawnshop} />
                <mesh geometry={nodes.pasted__pCube88_Pawnshop1GLOW_0.geometry} material={materials.Pawnshop1GLOW} />
              </group>
              <group position={[437.18, 1420.26, -373.82]} scale={[0.88, 0.08, 3.36]}>
                <mesh geometry={nodes.pasted__pCube89_Pawnshop_0.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[25, 1050, -100]}>
                <mesh geometry={nodes.pasted__pCube90_Pawnshop_0.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[7500, 20, 8700]}>
                <mesh geometry={nodes.pasted__BD_ConcreteBlock1_RoadsGround_0.geometry} material={materials.RoadsGround} />
              </group>
              <group position={[-1.15, 999.67, 626.6]} scale={[0.88, 1.18, 0.53]}>
                <mesh geometry={nodes.pasted__pCube91_Pawnshop_0.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[750, 999.67, 626.6]} scale={[0.88, 1.18, 0.53]}>
                <mesh geometry={nodes.pasted__pCube92_Pawnshop_0.geometry} material={materials.Pawnshop} />
              </group>
              <mesh geometry={nodes.pasted__polySurface807_Pawnshop_0.geometry} material={materials.Pawnshop} />
            </group>
            <group position={[-21450, 0, 14350]} rotation={[0, -Math.PI / 2, 0]}>
              <mesh geometry={nodes.LMProjects2_pasted__group65_pasted__pCube39_LMProjects1GLOW_0_2.geometry} material={materials.LMProjects1GLOW} />
              <mesh geometry={nodes.LMProjects2_pasted__group65_pasted__pCube40_LMProjects_0_2.geometry} material={materials.LMProjects} />
              <group position={[-32373.63, 2989.81, -9336.86]} rotation={[0, -0.72, 0]} scale={[0.17, 0.26, 0.17]}>
                <mesh geometry={nodes.pasted__pCylinder1_LMProjects_0_2.geometry} material={materials.LMProjects} />
              </group>
              <mesh geometry={nodes.pasted__group75_LMProjects_0_2.geometry} material={materials.LMProjects} />
              <group position={[-30500, 20, -8950]}>
                <group position={[400, 150, 0]}>
                  <mesh geometry={nodes.pasted__pCube1_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-1300, 2550, 0]}>
                  <mesh geometry={nodes.pasted__pCube18_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-1950, 2550, 0]}>
                  <mesh geometry={nodes.pasted__pCube19_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[400, 2550, 0]}>
                  <mesh geometry={nodes.pasted__pCube20_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-2450, 2550, 0]}>
                  <mesh geometry={nodes.pasted__pCube26_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-3100, 2550, 0]}>
                  <mesh geometry={nodes.pasted__pCube27_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-3100, 150, 0]}>
                  <mesh geometry={nodes.pasted__pCube28_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-1498.95, 668.31, 191.28]} scale={[0.85, 0.54, 0.85]}>
                  <mesh geometry={nodes.pasted__pCube31_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-2645.7, 668.31, 191.28]} scale={[0.85, 0.54, 0.85]}>
                  <mesh geometry={nodes.pasted__pCube32_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-4020.8, 2823.8, 430.44]} scale={[0.88, 0.62, 0.88]}>
                  <mesh geometry={nodes.pasted__pCube52_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-3670.74, 2823.8, -444.38]} scale={[2.88, 0.62, 0.51]}>
                  <mesh geometry={nodes.pasted__pCube53_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-3670.74, 2823.8, -205.88]} scale={[2.88, 0.62, 0.51]}>
                  <mesh geometry={nodes.pasted__pCube54_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-2185.54, 2465.95, 315.55]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                  <mesh geometry={nodes.pasted__pCube55_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-2185.54, 2465.95, -265.65]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                  <mesh geometry={nodes.pasted__pCube56_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[413.49, 2823.8, 430.44]} scale={[0.88, 0.62, 0.88]}>
                  <mesh geometry={nodes.pasted__pCube57_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-2564.95, 2465.95, -265.65]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                  <mesh geometry={nodes.pasted__pCube58_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-2564.95, 2465.95, 315.55]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                  <mesh geometry={nodes.pasted__pCube59_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-1421.36, 2465.95, -265.65]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                  <mesh geometry={nodes.pasted__pCube60_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-1421.36, 2465.95, 315.55]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                  <mesh geometry={nodes.pasted__pCube61_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-1041.95, 2465.95, -265.65]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                  <mesh geometry={nodes.pasted__pCube62_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-1041.95, 2465.95, 315.55]} rotation={[0, Math.PI / 2, 0]} scale={[0.77, 0.62, 0.4]}>
                  <mesh geometry={nodes.pasted__pCube63_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-525.84, 2945.76, -37.16]} scale={[0.76, 2.25, 0.11]}>
                  <mesh geometry={nodes.pasted__pCube64_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-525.84, 2945.76, -371.81]} scale={[0.76, 2.25, 0.11]}>
                  <mesh geometry={nodes.pasted__pCube65_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[-525.84, 2918.94, -76.66]} scale={[0.76, 1.89, 0.11]}>
                  <mesh geometry={nodes.pasted__pCube66_LMProjects_0_2.geometry} material={materials.LMProjects} />
                </group>
                <group position={[5700, 0, 8700]}>
                  <mesh geometry={nodes.pasted__BD_ConcreteBlock1_RoadsGround_0_5.geometry} material={materials.RoadsGround} />
                </group>
                <group position={[7500, 0, 8700]}>
                  <mesh geometry={nodes.pasted__BD_ConcreteBlock2_RoadsGround_0_2.geometry} material={materials.RoadsGround} />
                </group>
                <group position={[3900, 0, 8700]}>
                  <mesh geometry={nodes.pasted__BD_ConcreteBlock3_RoadsGround_0_2.geometry} material={materials.RoadsGround} />
                </group>
              </group>
            </group>
            <group position={[-12500, 0, -12550]} rotation={[0, Math.PI / 2, 0]}>
              <group position={[0, 450, -100]}>
                <mesh geometry={nodes.pasted__pCube80_Pawnshop_0_1.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[25, 650, -100]}>
                <mesh geometry={nodes.pasted__pCube81_Pawnshop_0_1.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[0, 1400, -100]}>
                <mesh geometry={nodes.pasted__polySurface804_Pawnshop_0_1.geometry} material={materials.Pawnshop} />
                <mesh geometry={nodes.pasted__polySurface805_Pawnshop_0_1.geometry} material={materials.Pawnshop} />
                <mesh geometry={nodes.pasted__polySurface806_Pawnshop_0_1.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[0, 509.63, -100]} scale={[1.01, 0.23, 1.02]}>
                <mesh geometry={nodes.pasted__pCube84_Pawnshop_0_1.geometry} material={materials.Pawnshop} />
              </group>
              <mesh geometry={nodes.pasted__loftedSurface3_Pawnshop_0_1.geometry} material={materials.Pawnshop} />
              <mesh geometry={nodes.pasted__loftedSurface3_Pawnshop1GLOW_0_1.geometry} material={materials.Pawnshop1GLOW} />
              <group position={[-750, 999.67, 626.6]} scale={[0.88, 1.18, 0.53]}>
                <mesh geometry={nodes.pasted__pCube85_Pawnshop_0_1.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[-2.65, 895.87, 802.3]} scale={[0.4, 0.93, 2.98]}>
                <mesh geometry={nodes.pasted__pCube88_Pawnshop_0_1.geometry} material={materials.Pawnshop} />
                <mesh geometry={nodes.pasted__pCube88_Pawnshop1GLOW_0_1.geometry} material={materials.Pawnshop1GLOW} />
              </group>
              <group position={[437.18, 1420.26, -373.82]} scale={[0.88, 0.08, 3.36]}>
                <mesh geometry={nodes.pasted__pCube89_Pawnshop_0_1.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[25, 1050, -100]}>
                <mesh geometry={nodes.pasted__pCube90_Pawnshop_0_1.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[7500, 20, 8700]}>
                <mesh geometry={nodes.pasted__BD_ConcreteBlock1_RoadsGround_0_1.geometry} material={materials.RoadsGround} />
              </group>
              <group position={[-1.15, 999.67, 626.6]} scale={[0.88, 1.18, 0.53]}>
                <mesh geometry={nodes.pasted__pCube91_Pawnshop_0_1.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[750, 999.67, 626.6]} scale={[0.88, 1.18, 0.53]}>
                <mesh geometry={nodes.pasted__pCube92_Pawnshop_0_1.geometry} material={materials.Pawnshop} />
              </group>
              <mesh geometry={nodes.pasted__polySurface807_Pawnshop_0_1.geometry} material={materials.Pawnshop} />
            </group>
            <group position={[-5242.12, 0, -10773.79]} rotation={[0, -Math.PI / 2, 0]}>
              <group position={[500, 0, 511.31]}>
                <group scale={[0.66, 1, 0.67]}>
                  <group position={[4334.54, 331.18, 7.29]} scale={[9.64, 0.53, 1.08]}>
                    <mesh geometry={nodes.polySurface128_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[33.59, 28.93, 48.85]} scale={[0.46, 0.86, 0.92]}>
                    <mesh geometry={nodes.polySurface34_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[0, -30.74, 0]}>
                  <group position={[0, 290.1, 0]} scale={[0.66, 1.17, 0.67]}>
                    <mesh geometry={nodes.polySurface139_FillerBuildings1_0_5.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 460.74, 0]} scale={[0.66, 1, 0.67]}>
                    <mesh geometry={nodes.polySurface140_FillerBuildings1_0_5.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-518.43, 460.74, -269.79]} scale={[0.66, 1, 0.5]}>
                    <mesh geometry={nodes.polySurface141_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-441.71, 1191.73, -156.04]} scale={[0.2, 0.35, 0.26]}>
                    <mesh geometry={nodes.polySurface142_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[229.41, 1639.91, -265.08]} scale={0.48}>
                    <mesh geometry={nodes.pCylinder10_FillerBuildings1_0_5.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[231.76, 1639.91, -475.05]} scale={0.48}>
                    <mesh geometry={nodes.pCylinder11_FillerBuildings1_0_5.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[229.41, 1639.91, -69.66]} scale={0.48}>
                    <mesh geometry={nodes.pCylinder12_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-146.36, 460.74, -269.79]} scale={[0.66, 1, 0.5]}>
                    <mesh geometry={nodes.polySurface804_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
              </group>
              <group position={[-500, 0, 450]}>
                <group scale={[0.66, 1, 0.67]}>
                  <group position={[0, 170, 0]}>
                    <mesh geometry={nodes.pCube11_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 550, 0]}>
                    <mesh geometry={nodes.pCube12_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 900, 0]}>
                    <mesh geometry={nodes.pCube13_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[0, -30.74, 0]}>
                  <group position={[0, -59.9, 0]} scale={[0.66, 1.17, 0.67]}>
                    <mesh geometry={nodes.polySurface139_FillerBuildings1_0_6.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 110.74, 0]} scale={[0.66, 1, 0.67]}>
                    <mesh geometry={nodes.polySurface140_FillerBuildings1_0_6.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-262.15, 110.74, 45.11]} scale={[0.66, 1, 0.5]}>
                    <mesh geometry={nodes.polySurface141_FillerBuildings1_0_5.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-185.99, 841.73, 124.91]} scale={[0.2, 0.35, 0.26]}>
                    <mesh geometry={nodes.polySurface142_FillerBuildings1_0_5.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-202.05, 1293.19, -231.44]} scale={0.5}>
                    <mesh geometry={nodes.pCylinder10_FillerBuildings1_0_6.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[124.78, 1293.19, -231.44]} scale={0.5}>
                    <mesh geometry={nodes.pCylinder11_FillerBuildings1_0_6.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[376.53, 0, -60.35]} scale={[-1.28, 1, 0.77]}>
                  <group position={[603.91, 122.08, 542.33]} scale={396.94}>
                    <mesh geometry={nodes.pCube17_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[271.74, 251.47, -834.31]} scale={[-0.78, 0.86, 3.6]}>
                    <mesh geometry={nodes.polySurface130_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[293.44, 0, 69.63]} scale={[-0.78, 1, 1.3]}>
                    <mesh geometry={nodes.polySurface129_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
              </group>
              <group position={[-500, 0, -450]} rotation={[-Math.PI, 0, -Math.PI]}>
                <group scale={[0.66, 1, 0.67]}>
                  <group position={[0, 170, 0]}>
                    <mesh geometry={nodes.pCube11_FillerBuildings1_0_5.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 550, 0]}>
                    <mesh geometry={nodes.pCube12_FillerBuildings1_0_5.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 900, 0]}>
                    <mesh geometry={nodes.pCube13_FillerBuildings1_0_5.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[0, -30.74, 0]}>
                  <group position={[0, -59.9, 0]} scale={[0.66, 1.17, 0.67]}>
                    <mesh geometry={nodes.polySurface139_FillerBuildings1_0_7.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 110.74, 0]} scale={[0.66, 1, 0.67]}>
                    <mesh geometry={nodes.polySurface140_FillerBuildings1_0_7.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[128.14, 110.74, 45.11]} scale={[0.66, 1, 0.5]}>
                    <mesh geometry={nodes.polySurface141_FillerBuildings1_0_6.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[204.3, 841.73, 124.91]} scale={[0.2, 0.35, 0.26]}>
                    <mesh geometry={nodes.polySurface142_FillerBuildings1_0_6.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-133.97, 1293.19, -231.44]} scale={0.5}>
                    <mesh geometry={nodes.pCylinder10_FillerBuildings1_0_7.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[192.85, 1293.19, -231.44]} scale={0.5}>
                    <mesh geometry={nodes.pCylinder11_FillerBuildings1_0_7.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
              </group>
              <group position={[8900, 0, 12550]}>
                <mesh geometry={nodes.Filler_SalsGlow_FillerBuildings1GLOW_0_1.geometry} material={materials.FillerBuildings1GLOW} />
              </group>
              <group position={[8900, 0, 12550]}>
                <mesh geometry={nodes.Filler_SalsWindows_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
              </group>
              <group position={[8900, 0, 12550]}>
                <mesh geometry={nodes.Filler_SalsT8_group8_pCube11_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
              </group>
            </group>
            <group position={[7191.55, 0, -7148.59]}>
              <mesh geometry={nodes.pCube45_FillerBuildings1GLOW_0_1.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.pCube52_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.group29_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.Filler_Apartments1_group59_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.group41_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.group60_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.Filler_Apartments2_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
            </group>
            <group position={[-19669.07, 0, -10830.44]} rotation={[0, -Math.PI / 2, 0]}>
              <group position={[500, 0, 511.31]}>
                <group scale={[0.66, 1, 0.67]}>
                  <group position={[4334.54, 331.18, 7.29]} scale={[9.64, 0.53, 1.08]}>
                    <mesh geometry={nodes.polySurface128_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[33.59, 28.93, 48.85]} scale={[0.46, 0.86, 0.92]}>
                    <mesh geometry={nodes.polySurface34_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[0, -30.74, 0]}>
                  <group position={[0, 290.1, 0]} scale={[0.66, 1.17, 0.67]}>
                    <mesh geometry={nodes.polySurface139_FillerBuildings1_0_8.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 460.74, 0]} scale={[0.66, 1, 0.67]}>
                    <mesh geometry={nodes.polySurface140_FillerBuildings1_0_8.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-518.43, 460.74, -269.79]} scale={[0.66, 1, 0.5]}>
                    <mesh geometry={nodes.polySurface141_FillerBuildings1_0_7.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-441.71, 1191.73, -156.04]} scale={[0.2, 0.35, 0.26]}>
                    <mesh geometry={nodes.polySurface142_FillerBuildings1_0_7.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[229.41, 1639.91, -265.08]} scale={0.48}>
                    <mesh geometry={nodes.pCylinder10_FillerBuildings1_0_8.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[231.76, 1639.91, -475.05]} scale={0.48}>
                    <mesh geometry={nodes.pCylinder11_FillerBuildings1_0_8.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[229.41, 1639.91, -69.66]} scale={0.48}>
                    <mesh geometry={nodes.pCylinder12_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-146.36, 460.74, -269.79]} scale={[0.66, 1, 0.5]}>
                    <mesh geometry={nodes.polySurface804_FillerBuildings1_0_3.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
              </group>
              <group position={[-500, 0, 450]}>
                <group scale={[0.66, 1, 0.67]}>
                  <group position={[0, 170, 0]}>
                    <mesh geometry={nodes.pCube11_FillerBuildings1_0_6.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 550, 0]}>
                    <mesh geometry={nodes.pCube12_FillerBuildings1_0_6.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 900, 0]}>
                    <mesh geometry={nodes.pCube13_FillerBuildings1_0_6.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[0, -30.74, 0]}>
                  <group position={[0, -59.9, 0]} scale={[0.66, 1.17, 0.67]}>
                    <mesh geometry={nodes.polySurface139_FillerBuildings1_0_9.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 110.74, 0]} scale={[0.66, 1, 0.67]}>
                    <mesh geometry={nodes.polySurface140_FillerBuildings1_0_9.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-262.15, 110.74, 45.11]} scale={[0.66, 1, 0.5]}>
                    <mesh geometry={nodes.polySurface141_FillerBuildings1_0_8.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-185.99, 841.73, 124.91]} scale={[0.2, 0.35, 0.26]}>
                    <mesh geometry={nodes.polySurface142_FillerBuildings1_0_8.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-202.05, 1293.19, -231.44]} scale={0.5}>
                    <mesh geometry={nodes.pCylinder10_FillerBuildings1_0_9.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[124.78, 1293.19, -231.44]} scale={0.5}>
                    <mesh geometry={nodes.pCylinder11_FillerBuildings1_0_9.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[376.53, 0, -60.35]} scale={[-1.28, 1, 0.77]}>
                  <group position={[603.91, 122.08, 542.33]} scale={396.94}>
                    <mesh geometry={nodes.pCube17_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[271.74, 251.47, -834.31]} scale={[-0.78, 0.86, 3.6]}>
                    <mesh geometry={nodes.polySurface130_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[293.44, 0, 69.63]} scale={[-0.78, 1, 1.3]}>
                    <mesh geometry={nodes.polySurface129_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
              </group>
              <group position={[-500, 0, -450]} rotation={[-Math.PI, 0, -Math.PI]}>
                <group scale={[0.66, 1, 0.67]}>
                  <group position={[0, 170, 0]}>
                    <mesh geometry={nodes.pCube11_FillerBuildings1_0_7.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 550, 0]}>
                    <mesh geometry={nodes.pCube12_FillerBuildings1_0_7.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 900, 0]}>
                    <mesh geometry={nodes.pCube13_FillerBuildings1_0_7.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[0, -30.74, 0]}>
                  <group position={[0, -59.9, 0]} scale={[0.66, 1.17, 0.67]}>
                    <mesh geometry={nodes.polySurface139_FillerBuildings1_0_10.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 110.74, 0]} scale={[0.66, 1, 0.67]}>
                    <mesh geometry={nodes.polySurface140_FillerBuildings1_0_10.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[128.14, 110.74, 45.11]} scale={[0.66, 1, 0.5]}>
                    <mesh geometry={nodes.polySurface141_FillerBuildings1_0_9.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[204.3, 841.73, 124.91]} scale={[0.2, 0.35, 0.26]}>
                    <mesh geometry={nodes.polySurface142_FillerBuildings1_0_9.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-133.97, 1293.19, -231.44]} scale={0.5}>
                    <mesh geometry={nodes.pCylinder10_FillerBuildings1_0_10.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[192.85, 1293.19, -231.44]} scale={0.5}>
                    <mesh geometry={nodes.pCylinder11_FillerBuildings1_0_10.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
              </group>
              <group position={[8900, 0, 12550]}>
                <mesh geometry={nodes.Filler_SalsGlow_FillerBuildings1GLOW_0_2.geometry} material={materials.FillerBuildings1GLOW} />
              </group>
              <group position={[8900, 0, 12550]}>
                <mesh geometry={nodes.Filler_SalsWindows_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
              </group>
              <group position={[8900, 0, 12550]}>
                <mesh geometry={nodes.Filler_SalsT8_group8_pCube11_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
              </group>
            </group>
            <group position={[-17836.98, 0, 10750.03]} rotation={[0, -Math.PI / 2, 0]}>
              <mesh geometry={nodes.pCube45_FillerBuildings1GLOW_0_2.geometry} material={materials.FillerBuildings1GLOW} />
              <mesh geometry={nodes.pCube52_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.group29_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.Filler_Apartments1_group59_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.group41_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.group60_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
              <mesh geometry={nodes.Filler_Apartments2_FillerBuildings1_0_2.geometry} material={materials.FillerBuildings1} />
            </group>
            <group position={[-7100, 0, -19761.31]}>
              <group position={[-1950, 0, 511.31]}>
                <group scale={[0.66, 1, 0.67]}>
                  <group position={[0, 170, 0]}>
                    <mesh geometry={nodes.pCube11_FillerBuildings1_0_8.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 550, 0]}>
                    <mesh geometry={nodes.pCube12_FillerBuildings1_0_8.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 900, 0]}>
                    <mesh geometry={nodes.pCube13_FillerBuildings1_0_8.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[1806.95, 471.69, 15.76]} scale={[4.07, 1.24, 1.08]}>
                    <mesh geometry={nodes.polySurface17_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[2329.6, 471.69, 15.76]} scale={[4.07, 1.24, 1.08]}>
                    <mesh geometry={nodes.polySurface18_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[1806.95, 810.33, 15.76]} scale={[4.07, 1.24, 1.08]}>
                    <mesh geometry={nodes.polySurface19_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[2329.6, 810.33, 15.76]} scale={[4.07, 1.24, 1.08]}>
                    <mesh geometry={nodes.polySurface20_FillerBuildings1GLOW_0_1.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[-341.05, 80, 66.88]} scale={[1, 1, 0.75]}>
                    <mesh geometry={nodes.polySurface79_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[4334.54, 331.18, 7.29]} scale={[9.64, 0.53, 1.08]}>
                    <mesh geometry={nodes.polySurface128_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 900, -1200]}>
                    <mesh geometry={nodes.pCube104_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 550, -1200]}>
                    <mesh geometry={nodes.pCube105_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 170, -1200]}>
                    <mesh geometry={nodes.pCube106_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[1292.04, 810.33, 15.76]} scale={[4.07, 1.24, 1.08]}>
                    <mesh geometry={nodes.polySurface806_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[1292.04, 471.69, 15.76]} scale={[4.07, 1.24, 1.08]}>
                    <mesh geometry={nodes.polySurface807_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[22.27, 28.93, 32.95]} scale={[0.3, 0.86, 0.62]}>
                  <mesh geometry={nodes.polySurface34_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[0, -30.74, 0]}>
                  <group position={[0, 1280.74, 0]} scale={[0.66, 1, 0.67]}>
                    <mesh geometry={nodes.pCube34_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[1198.21, 1191.07, 10.63]} scale={[2.7, 1.24, 0.73]}>
                    <mesh geometry={nodes.polySurface131_FillerBuildings1GLOW_0_1.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[1544.79, 1191.07, 10.63]} scale={[2.7, 1.24, 0.73]}>
                    <mesh geometry={nodes.polySurface132_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[949.4, 1203.37, 983.32]} rotation={[0, -Math.PI / 2, 0]} scale={[1.32, 1.08, 0.71]}>
                    <mesh geometry={nodes.polySurface137_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[949.4, 1203.37, 1148.16]} rotation={[0, -Math.PI / 2, 0]} scale={[1.32, 1.08, 0.71]}>
                    <mesh geometry={nodes.polySurface138_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 290.1, 0]} scale={[0.66, 1.17, 0.67]}>
                    <mesh geometry={nodes.polySurface139_FillerBuildings1_0_11.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 460.74, 0]} scale={[0.66, 1, 0.67]}>
                    <mesh geometry={nodes.polySurface140_FillerBuildings1_0_11.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-518.43, 460.74, -269.79]} scale={[0.66, 1, 0.5]}>
                    <mesh geometry={nodes.polySurface141_FillerBuildings1_0_10.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-441.71, 1191.73, -156.04]} scale={[0.2, 0.35, 0.26]}>
                    <mesh geometry={nodes.polySurface142_FillerBuildings1_0_10.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[229.41, 1639.91, -265.08]} scale={0.48}>
                    <mesh geometry={nodes.pCylinder10_FillerBuildings1_0_11.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[231.76, 1639.91, -475.05]} scale={0.48}>
                    <mesh geometry={nodes.pCylinder11_FillerBuildings1_0_11.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[0, 1280.74, -809.32]} scale={[0.66, 1, 0.67]}>
                    <mesh geometry={nodes.pCube103_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[229.41, 1639.91, -69.66]} scale={0.48}>
                    <mesh geometry={nodes.pCylinder12_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-146.36, 460.74, -269.79]} scale={[0.66, 1, 0.5]}>
                    <mesh geometry={nodes.polySurface804_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[856.77, 1191.07, 10.63]} scale={[2.7, 1.24, 0.73]}>
                    <mesh geometry={nodes.polySurface805_FillerBuildings1GLOW_0_1.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[949.4, 1203.37, -255.06]} rotation={[0, -Math.PI / 2, 0]} scale={[1.32, 1.08, 0.71]}>
                    <mesh geometry={nodes.polySurface808_FillerBuildings1GLOW_0_1.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[949.4, 856.17, -255.06]} rotation={[0, -Math.PI / 2, 0]} scale={[1.32, 1.08, 0.71]}>
                    <mesh geometry={nodes.polySurface809_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[856.77, 1191.07, -1885.09]} scale={[2.7, 1.24, 0.73]}>
                    <mesh geometry={nodes.polySurface810_FillerBuildings1GLOW_0_1.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[1198.21, 1191.07, -1885.09]} scale={[2.7, 1.24, 0.73]}>
                    <mesh geometry={nodes.polySurface811_FillerBuildings1GLOW_0_1.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[1544.79, 1191.07, -1885.09]} scale={[2.7, 1.24, 0.73]}>
                    <mesh geometry={nodes.polySurface812_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-163.61, 1203.37, 1148.16]} rotation={[0, -Math.PI / 2, 0]} scale={[1.32, 1.08, 0.71]}>
                    <mesh geometry={nodes.polySurface813_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-163.61, 1203.37, 983.32]} rotation={[0, -Math.PI / 2, 0]} scale={[1.32, 1.08, 0.71]}>
                    <mesh geometry={nodes.polySurface814_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[-163.61, 1203.37, -255.06]} rotation={[0, -Math.PI / 2, 0]} scale={[1.32, 1.08, 0.71]}>
                    <mesh geometry={nodes.polySurface815_FillerBuildings1GLOW_0_1.geometry} material={materials.FillerBuildings1GLOW} />
                  </group>
                  <group position={[-163.61, 856.17, -255.06]} rotation={[0, -Math.PI / 2, 0]} scale={[1.32, 1.08, 0.71]}>
                    <mesh geometry={nodes.polySurface816_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[74.01, 0, -60.35]} scale={[-1.28, 1, 0.77]}>
                  <group position={[603.91, 122.08, 542.33]} scale={396.94}>
                    <mesh geometry={nodes.pCube17_FillerBuildings1_0_5.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[274.03, 251.47, -834.31]} scale={[-0.78, 0.86, 3.6]}>
                    <mesh geometry={nodes.polySurface130_FillerBuildings1_0_5.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[293.44, 0, 69.63]} scale={[-0.78, 1, 1.3]}>
                    <mesh geometry={nodes.polySurface129_FillerBuildings1_0_5.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
              </group>
              <group position={[-900, 0, 311.31]}>
                <group position={[0, 170, 0]}>
                  <mesh geometry={nodes.pCube26_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[-1339.39, -672.9, 0]} scale={[1.03, 3.17, 1.03]}>
                  <mesh geometry={nodes.polySurface112_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[1200, 170, 0]}>
                  <mesh geometry={nodes.pCube29_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[0, 928.8, 0]}>
                  <mesh geometry={nodes.pCube30_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[0, 628.8, 0]}>
                  <mesh geometry={nodes.pCube31_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <mesh geometry={nodes.polySurface113_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                <group position={[572.63, 474.26, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface114_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[164.54, 474.26, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface115_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[-265.15, 474.26, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface116_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[1008.38, 474.26, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface117_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[1392.85, 474.26, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface118_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[1392.85, 194.97, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface119_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[1008.38, 194.97, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface120_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[572.63, 194.97, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface121_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[164.54, 194.97, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface122_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[-265.15, 194.97, -29.49]} scale={[0.06, 1, 1]}>
                  <mesh geometry={nodes.polySurface123_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[-422.42, 586.37, 747.99]} scale={[0.89, 1, 1]}>
                  <mesh geometry={nodes.pCube32_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[-422.42, 743.48, 717.83]} scale={[0.89, 1.69, 0.35]}>
                  <mesh geometry={nodes.pCube33_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[-288.84, 665.62, 0]} scale={0.4}>
                  <mesh geometry={nodes.polySurface124_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[231.5, 665.62, -413.34]} scale={0.4}>
                  <mesh geometry={nodes.polySurface125_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[-0.48, 0, -236.31]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <group position={[627.21, 1309.44, 196.23]} scale={[1, 1, 0.91]}>
                    <mesh geometry={nodes.pCube23_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[608.16, 598.99, 102.37]} scale={[0.67, 0.67, 0.84]}>
                    <mesh geometry={nodes.pCylinder7_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[1200.48, 0, 142.25]}>
                  <group position={[627.21, 1309.44, 196.23]} scale={[1, 1, 0.91]}>
                    <mesh geometry={nodes.pCube23_FillerBuildings1_0_5.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[608.16, 598.99, 102.37]} scale={[0.67, 0.67, 0.84]}>
                    <mesh geometry={nodes.pCylinder7_FillerBuildings1_0_5.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[1.03, 0, 258.05]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <group position={[362.63, 295.52, 418.22]} rotation={[0, Math.PI / 2, 0]} scale={[0.04, 0.1, 0.4]}>
                    <mesh geometry={nodes.polySurface98_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[166.9, 14.37, 422.84]} rotation={[0, Math.PI / 2, 0]} scale={[0.08, 0.4, 0.74]}>
                    <mesh geometry={nodes.polySurface97_FillerBuildings1_0_4.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[1202.72, 0, -193.83]}>
                  <group position={[362.63, 295.52, 299.4]} rotation={[0, Math.PI / 2, 0]} scale={[0.04, 0.1, 0.4]}>
                    <mesh geometry={nodes.polySurface98_FillerBuildings1_0_5.geometry} material={materials.FillerBuildings1} />
                  </group>
                  <group position={[162.1, 14.37, 293.83]} rotation={[0, Math.PI / 2, 0]} scale={[0.08, 0.4, 0.74]}>
                    <mesh geometry={nodes.polySurface97_FillerBuildings1_0_5.geometry} material={materials.FillerBuildings1} />
                  </group>
                </group>
                <group position={[1680.62, 1150.85, -472.47]} scale={0.61}>
                  <mesh geometry={nodes.pCylinder9_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[3650, 0, 0]}>
                  <mesh geometry={nodes.polySurface256_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[3600, 0, 0]}>
                  <mesh geometry={nodes.polySurface257_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
                <group position={[3600, 0, 0]}>
                  <mesh geometry={nodes.polySurface258_FillerBuildings1_0_1.geometry} material={materials.FillerBuildings1} />
                </group>
              </group>
            </group>
            <group position={[-7100, 0, -16149.97]}>
              <group position={[0, 450, -100]}>
                <mesh geometry={nodes.pasted__pCube80_Pawnshop_0_2.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[25, 650, -100]}>
                <mesh geometry={nodes.pasted__pCube81_Pawnshop_0_2.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[0, 1400, -100]}>
                <mesh geometry={nodes.pasted__polySurface804_Pawnshop_0_2.geometry} material={materials.Pawnshop} />
                <mesh geometry={nodes.pasted__polySurface805_Pawnshop_0_2.geometry} material={materials.Pawnshop} />
                <mesh geometry={nodes.pasted__polySurface806_Pawnshop_0_2.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[0, 509.63, -100]} scale={[1.01, 0.23, 1.02]}>
                <mesh geometry={nodes.pasted__pCube84_Pawnshop_0_2.geometry} material={materials.Pawnshop} />
              </group>
              <mesh geometry={nodes.pasted__loftedSurface3_Pawnshop_0_2.geometry} material={materials.Pawnshop} />
              <mesh geometry={nodes.pasted__loftedSurface3_Pawnshop1GLOW_0_2.geometry} material={materials.Pawnshop1GLOW} />
              <group position={[-750, 999.67, 626.6]} scale={[0.88, 1.18, 0.53]}>
                <mesh geometry={nodes.pasted__pCube85_Pawnshop_0_2.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[-2.65, 895.87, 802.3]} scale={[0.4, 0.93, 2.98]}>
                <mesh geometry={nodes.pasted__pCube88_Pawnshop_0_2.geometry} material={materials.Pawnshop} />
                <mesh geometry={nodes.pasted__pCube88_Pawnshop1GLOW_0_2.geometry} material={materials.Pawnshop1GLOW} />
              </group>
              <group position={[437.18, 1420.26, -373.82]} scale={[0.88, 0.08, 3.36]}>
                <mesh geometry={nodes.pasted__pCube89_Pawnshop_0_2.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[25, 1050, -100]}>
                <mesh geometry={nodes.pasted__pCube90_Pawnshop_0_2.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[7500, 20, 8700]}>
                <mesh geometry={nodes.pasted__BD_ConcreteBlock1_RoadsGround_0_2.geometry} material={materials.RoadsGround} />
              </group>
              <group position={[-1.15, 999.67, 626.6]} scale={[0.88, 1.18, 0.53]}>
                <mesh geometry={nodes.pasted__pCube91_Pawnshop_0_2.geometry} material={materials.Pawnshop} />
              </group>
              <group position={[750, 999.67, 626.6]} scale={[0.88, 1.18, 0.53]}>
                <mesh geometry={nodes.pasted__pCube92_Pawnshop_0_2.geometry} material={materials.Pawnshop} />
              </group>
              <mesh geometry={nodes.pasted__polySurface807_Pawnshop_0_2.geometry} material={materials.Pawnshop} />
            </group>
          </group>
        </group>
      </group>
    )
  }

  const City = () => {
    return (
      <div className = {styles.App}>
        <Canvas camera={{ fov: 40, zoom: 1.3, near: 1, far: 1000 }}>
        {/* <Stage preset="rembrandt" intensity={1} environment="city"> */}
          <Suspense fallback={null}>
            <ambientLight />
            <directionalLight intensity={2} position={[0,0,0]} />
            <Model scale={[0.01,0.01,0.01]}/>
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            <Environment preset="sunset" background />
          </Suspense>
        {/* </Stage> */}
        </Canvas>
   
      </div>
    );
  }
  
  export default City;