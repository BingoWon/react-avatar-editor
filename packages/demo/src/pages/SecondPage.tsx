import React, { ChangeEvent, useRef, useState } from 'react'
import AvatarEditor, { type Position } from 'react-avatar-editor'
import Dropzone from 'react-dropzone'
import AvatarImagePath from '../avatar.jpg'

type State = {
  image: string | File
  position: Position
  scale: number
}

const SecondPage = () => {
  const defaultState = {
    image: AvatarImagePath,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
  }

  const [state, setState] = useState<State>(defaultState)
  const editor = useRef<AvatarEditor>(null)

  const handleNewImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setState((prev) => ({ ...prev, image: e.target.files![0] }))
    }
  }

  const handleScale = (e: ChangeEvent<HTMLInputElement>) => {
    const scale = parseFloat(e.target.value)
    setState((prev) => ({ ...prev, scale }))
  }

  const handlePositionChange = (position: Position) => {
    setState((prev) => ({ ...prev, position }))
  }

  const handleDrop = (dropped: File[]) => {
    setState((prev) => ({ ...prev, image: dropped[0] }))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div
        style={{
          display: 'flex',
          gap: '40px',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          width: 'fit-content',
          margin: '0 auto',
        }}
      >
        <div>
          <Dropzone onDrop={handleDrop} noClick noKeyboard>
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  width: 231,
                  height: 231,
                  borderRadius: 58,
                  overflow: 'hidden',
                }}
                {...getRootProps()}
              >
                <AvatarEditor
                  ref={editor}
                  scale={state.scale}
                  width={231}
                  height={231}
                  position={state.position}
                  onPositionChange={handlePositionChange}
                  image={state.image}
                  borderRadius={58}
                  border={0}
                  color={[0, 0, 0, 0]}
                  allowZoomOut={false}
                  showGrid={false}
                  disableCanvasRotation={true}
                  rotate={0}
                />
              </div>
            )}
          </Dropzone>

          <br />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px',
              backgroundColor: '#f8f8f8',
              borderRadius: '8px',
            }}
          >
            <label htmlFor="scale2" style={{ color: '#666' }}>
              缩放:
            </label>
            <input
              id="scale2"
              name="scale2"
              type="range"
              onChange={handleScale}
              min="1"
              max="2"
              step="0.01"
              defaultValue="1"
              style={{ flex: 1 }}
            />
            <span>{state.scale.toFixed(2)}x</span>
          </div>
          <br />
          <input
            name="file2"
            type="file"
            onChange={handleNewImage}
            style={{ display: 'none' }}
            id="fileInput2"
          />
          <label
            htmlFor="fileInput2"
            style={{ cursor: 'pointer', color: '#4a90e2' }}
          >
            选择文件
          </label>
        </div>
      </div>
    </div>
  )
}

export default SecondPage
