const quotes = [
    {
        quote: "꿈 잃어버릴 수 있어요. 근데 그렇다고 그 자리에서 계속 머물러 있지 말고, 자신에게 집중하세요. 자신을 채워나가는 과정만 계속 반복하다 보면 힘든 시기가 지나간 후 나는 한 단계 더 올라가 있을 겁니다.",
        author: "1",
    },
    {
        quote: "운동할 때 동작을 정확히 하면 보기엔 간단하더라도 몸이 아파와요. 동작을 틀리게 하면 아프지 않고요. 세상살이도 이와 같아요. 인생이 정말 힘들다고 느껴지잖아요, 그런데 그게 틀리게 살고 있어서가 아니라 잘 살고 있어서 그렇게 느껴지는 거예요.",
        author: "2",
    },
    {
        quote: "외유내강이든, 외강내강이든 겉모습은 상관없다. 강해 보일 필요도, 약해 보일 필요도 없이 그저 나면 된다.",
        author: "3",
    },
    {
        quote: "무엇보다도 제일 행복한 게 내가 하고 싶은 일을 열심히 하는 거거든요'. 결과도 중요하지만, 결과에만 너무 집중하지 말고 열심히 하는 과정을 한번 즐겨 보세요. 항상 응원할게요. 파이팅!",
        author: "4",
    },
    {
        quote: "이 자리를 빌려서 당신에게 보통은 평범함을 의미하는 게 아니라는 걸 말씀드리고 싶어요. 평범한 게 나쁜 건 아니지만, 어느 누구도 당신의 인생이 평범하다고 말할 수 없는 거니까요. 다른 사람 신경 쓰지 말고 본인이 원하시는 거 꼭 하세요. 제가 항상 응원할게요. 파이팅!",
        author: "5",
    },
    {
        quote: "가끔은 남보다 느릴 때가 있는데 그럴 때마다 뭔가 다르게 느껴질 수 있지만, 조금 늦어도 괜찮으니까 꾸준한 게 중요한 것 같아요. 절대 중간에서 포기하지 않으셨으면 좋겠어요. 너무 조급해하지 마시고, 천천히 자신만의 속도를 유지하면서 성공하면 되니까요.",
        author: "6",
    },
    {
        quote: "제가 긴장할 땐 따로 긴장을 푸는 방법보다 그냥 나를 믿어야 해요. 자신이 있어야 해요.",
        author: "7",
    },
    {
        quote: "나를 먼저 사랑할 줄 알아야 남을 사랑할 줄 아는 것이기 때문에 그래야 가족, 친구들 그리고 일하는 사이의 동료들한테도 더 좋은 사람이 될 수 있다고 생각합니다.",
        author: "8",
    },
    {
        quote: "그래도 자기의 의견을 꾹 눌러서 그런 것들이 참 힘들었을 것 같은데 제가 그런 얘기를 들었었어요. 욕조에다 물을 부어놓고 공 하나를 밑으로 꾹 눌러요. 그러면 위에는 공이 없다가 손이 너무 힘들어서 손을 푸는 순간 다시 튀어나올 거에요. 그래서 자기의 성격을 바꾸는 것보다, 그리고 억누르는 것보다는 성격을 “이게 나야.” 이렇게 하고 하고 싶은 말은 다 할 수 있어요.",
        author: "9",
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)] // 랜덤 Math.round(반올림)/Math.ceil(올림)/Math.floor(내림)

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;