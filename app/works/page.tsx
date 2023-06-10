import styles from './page.module.scss'

const WORKS = [
  {
    title: 'Radiata',
    description: 'diffusersベースのstable-diffusion-webui',
    url: 'https://github.com/ddPn08/Radiata',
    img: 'https://repository-images.githubusercontent.com/597319678/50af17dd-d5a0-4d71-a469-3f92068e5b3a',
  },
  {
    title: 'rvc-webui',
    description: 'RVCモデルをより便利にトレーニング',
    url: 'https://github.com/ddPn08/rvc-webui',
    img: 'https://opengraph.githubassets.com/4e28b4754ba198601927ca9fad752f91b2ad4bacbd78ce68daa36fd58d308595/ddPn08/rvc-webui',
  },
]

const Works = () => {
  return (
    <div className={styles.container}>
      <h1>Works</h1>
      <div>
        {WORKS.map((work, i) => (
          <a key={i} href={work.url} target="_blank">
            <div className={styles['work-item']}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={work.img} alt={work.title} />
              <div>
                <h2>{work.title}</h2>
                <p>{work.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Works

export const runtime = 'edge'
