import { Title, TitleSmall } from "./styles";

function App() {
  return (
    <div>
      <Title fontSize={80}>Hello
        <span>Texto Menor</span>
      </Title>

      <TitleSmall>Menor</TitleSmall>
    </div>
  );
}

export default App;
