import { useState } from 'react'
import styled from 'styled-components'
import logo from './assets/logo.svg'
import image from './assets/image.png'
import car from './assets/car.png'
import carActive from './assets/car-active.png'
import cars from './assets/cars.png'
import carsActive from './assets/cars-active.png'
import plus from './assets/plus.png'
import minus from './assets/minus.png'
import call from './assets/call.png'
import callActive from './assets/call-active.png'
import axios from 'axios'

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0rem;
`

const HeadOverflow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.62rem;
  padding: 0.75rem 1.19rem;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #353535;
  width: 100%;
  box-sizing: border-box;
`

const Logo = styled.div`
  width: 13rem;
  height: 2.69rem;
  background-image: url(${logo});
`

const Image = styled.div`
  width: 100%;
  height: 13.19rem;
  background-image: url(${image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`

const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.62rem;
  padding: 0.94rem;  
  box-sizing: border-box;
  max-width: 600px;
`

const ContentOverflow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.25rem;
`

const Line = styled.div`
  height: 0.06rem;
  background: #4b4b4b;
  width: 100%;
`

const TopContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 2.12rem;
`

const SuperTextItalicCenter = styled.div`
  font-family: var(--second-family);
  font-style: italic;
  font-weight: 400;
  font-size: 1.06rem;
  text-align: center;
  color: #fff;
`

const SuperText = styled.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 1.06rem;
  color: #fff;
`

const BottomOverflow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.88rem;
  width: 100%;
`

const RowBottoomOverflow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`

const TitleOverflow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 0.62rem;
`

const TitleText = styled.div`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 1.31rem;
  color: #fff;
`

const BottomContentOverflow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`

const BottomContainerOverflow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`

const BottomContainerOverflowRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 0.94rem;
  width: 100%;
`

const ButtonOverflow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.62rem;
  border: 3px solid #7a7a79;
  border-radius: 0.94rem;
  padding: 1.5rem 2.19rem;
  background: #353535;
  width: 100%;
  cursor: pointer;
`

const FakeInputOverflow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.62rem;
  border: 3px solid #e9ba00;
  border-radius: 0.94rem;
  padding: 1.5rem 1.5rem;
  box-sizing: border-box;
  background: #353535;
  width: 100%;
  height: 4.31rem;
`

const InputOverflow = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 0.62rem;
  border: 3px solid #e9ba00;
  border-radius: 0.94rem;
  padding: 1.5rem 2.19rem;
  box-sizing: border-box;
  background: #353535;
  width: 100%;
  height: 4.31rem;
  outline: none;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 1.06rem;
  color: #fff;
`

const MainButtonOverflow = styled.div`
  background: #e9ba00;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.62rem;
  border: 3px solid #e9ba00;
  border-radius: 0.94rem;
  padding: 1.5rem 2.19rem;
  box-sizing: border-box;
  height: 4.31rem;
  width: 100%;
  cursor: pointer;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 1.06rem;
  color: #353535;
`

const SmallButtonOverflow = styled.div`
  background: #e9ba00;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.62rem;
  border: 3px solid #e9ba00;
  border-radius: 0.94rem;
  padding: 1.5rem 2.19rem;
  box-sizing: border-box;
  height: 4.31rem;
  width: 4.31rem;
  cursor: pointer;
`

const FullIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.94rem;
`

const Icon = styled.img``

const TextIcon = styled.div`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 1.06rem;
  color: #fff;
  white-space: nowrap;
`

const TextPrice = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  gap: 0.69rem;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 1.31rem;
  color: #fff;
`

const Text = styled.div`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 1.06rem;
  color: #fff;
`

const App = () => {
  const [isCars, setCars] = useState(false)
      , [carsCount, setCarsCount] = useState(2)
      , [isCallNow, setCallNow] = useState(true)
      , [callHours, setCallHours] = useState(2)
      , [phone, setPhone] = useState('')
      , [comment, setComment] = useState('')

  const onHandleCall = () => {
    const data = {
      cars: (isCars ? carsCount : 1),
      price: (isCars ? carsCount : 1) * 70,
      hours: isCallNow ? 'now' : `After ${callHours} hours`,
      phone: phone,
      comment: comment
    }

    axios.post('/data', data)
      .then(() => {
        alert('Expect a call!')
        window.location.reload()
      })
      .catch(() => {
        alert('Error')
      })
  }

  return (
    <Body>
      <HeadOverflow>
        <Logo />
      </HeadOverflow>
      <Image />
      <ContentContainer>
        <ContentOverflow>
          <TopContent>
            <SuperTextItalicCenter>Your safety shouldn’t be a question. We offer reliable, sober drivers whenever you need them.</SuperTextItalicCenter>
            <SuperText>sdjfksdjf ksd fjksd jfksd jksd fjksdfj  sjkdf jksd jksdj fsdjkf skjdf d kjfsdj ksjkf jkdf jskf jskdf jks kjfs jkdf jsd ksdjf sdkjf sjkf skf sdf sfkjs jfksf </SuperText>
            <SuperText>Your safety shouldn’t be a question. We offer reliable, sober drivers whenever you need them. Price от 70$</SuperText>
          </TopContent>
          <Line />
          <BottomOverflow>
            <RowBottoomOverflow>
              <TitleOverflow>
                <TitleText>Select options</TitleText>
              </TitleOverflow>
              <BottomContentOverflow>
              <BottomContainerOverflow>
                <BottomContainerOverflowRow>
                  <ButtonOverflow onClick={() => setCars(s => false)} style={{ border: `3px solid ${!isCars ? '#E9BA00' : '#353535'}` }}>
                    <FullIconContainer>
                      <Icon src={isCars ? car : carActive}/>
                      <TextIcon>Single car</TextIcon>
                    </FullIconContainer>
                  </ButtonOverflow>
                  <ButtonOverflow onClick={() => setCars(s => true)} style={{ border: `3px solid ${isCars ? '#E9BA00' : '#353535'}` }}>
                    <FullIconContainer>
                      <Icon src={!isCars ? cars : carsActive}/>
                      <TextIcon>Multiple car</TextIcon>
                    </FullIconContainer>
                  </ButtonOverflow>
                </BottomContainerOverflowRow>
                {
                  isCars ? (
                    <BottomContainerOverflowRow>
                      <FakeInputOverflow>
                        <TextIcon>{carsCount} car</TextIcon>
                      </FakeInputOverflow>
                      <SmallButtonOverflow onClick={() => setCarsCount(s => s >= 4 ? 4 : s+1)}>
                        <Icon src={plus} />
                      </SmallButtonOverflow>
                      <SmallButtonOverflow onClick={() => setCarsCount(s => s <= 1 ? 1 : s-1)}>
                        <Icon src={minus} />
                      </SmallButtonOverflow>
                    </BottomContainerOverflowRow>
                  ) : (
                    null
                  )
                }
              </BottomContainerOverflow>
              <Line />
              <BottomContainerOverflow>
                <BottomContainerOverflowRow>
                  <ButtonOverflow onClick={() => setCallNow(() => true)} style={{ border: `3px solid ${isCallNow ? '#E9BA00' : '#353535'}` }}>
                    <FullIconContainer>
                      <Icon src={!isCallNow ? call : callActive}/>
                      <TextIcon>Сейчас</TextIcon>
                    </FullIconContainer>
                  </ButtonOverflow>
                  <ButtonOverflow onClick={() => setCallNow(() => false)} style={{ border: `3px solid ${!isCallNow ? '#E9BA00' : '#353535'}` }}>
                    <FullIconContainer>
                      <Icon src={isCallNow ? call : callActive}/>
                      <TextIcon>Через время</TextIcon>
                    </FullIconContainer>
                  </ButtonOverflow>
                </BottomContainerOverflowRow>
                {
                  !isCallNow ? (
                    <BottomContainerOverflowRow>
                      <FakeInputOverflow>
                        <TextIcon>After {callHours} hours</TextIcon>
                      </FakeInputOverflow>
                      <SmallButtonOverflow onClick={() => setCallHours(s => s >= 24 ? 24 : s + 1)}>
                        <Icon src={plus} />
                      </SmallButtonOverflow>
                      <SmallButtonOverflow onClick={() => setCallHours(s => s <= 1 ? 1 : s - 1)}>
                        <Icon src={minus} />
                      </SmallButtonOverflow>
                    </BottomContainerOverflowRow>
                  ) : (
                    null
                  )
                }
              </BottomContainerOverflow>
              </BottomContentOverflow>
            </RowBottoomOverflow>
            <Line />
            <RowBottoomOverflow>
              <TitleOverflow>
                <TitleText>Approximate price</TitleText>
              </TitleOverflow>
              <BottomContentOverflow>
              <BottomContainerOverflow>
                <TextPrice>Items: <b>{(isCars ? carsCount : 1)} cars</b> x <b>70$</b></TextPrice>
                <TextPrice>Count: <b>{(isCars ? carsCount : 1) * 70}$~</b></TextPrice>
              </BottomContainerOverflow>
              </BottomContentOverflow>
            </RowBottoomOverflow>
            <Line />
            <RowBottoomOverflow>
              <TitleOverflow>
                <TitleText>Your contacts</TitleText>
              </TitleOverflow>
              <BottomContentOverflow>
              <BottomContainerOverflow>
                <InputOverflow value={phone} onChange={({ target: { value } }) => setPhone(value)} placeholder="+1 (999) 999 - 9999" />
                <InputOverflow value={comment} onChange={({ target: { value } }) => setComment(value)} placeholder="Comment" />
                <MainButtonOverflow onClick={() => onHandleCall()}>ОФОРМИТЬ ДОСТАВКУ</MainButtonOverflow>
              </BottomContainerOverflow>
              </BottomContentOverflow>
            </RowBottoomOverflow>
            <Line />
            <Text>sdjfksdjf ksd fjksd jfksd jksd fjksdfj  sjkdf jksd jksdj fsdjkf skjdf d kjfsdj ksjkf jkdf jskf jskdf jks kjfs jkdf jsd ksdjf sdkjf sjkf skf sdf sfkjs jfksf</Text>
            <Text style={{ width: '100%', textAlign: 'center', color: '#7a7a79' }}>2024</Text>
          </BottomOverflow>
        </ContentOverflow>
      </ContentContainer>
    </Body>
  )
}

export default App
