import React, { useState, useEffect } from 'react';
import './styles.scss';

const allDic = [
  '사과',
  '바나나',
  '포도',
  '참외',
  '체리',
  '망고',
  '수박',
  '오랜지',
  '블루베리',
  '딸기',
];

const randomDic = () => {
  const viewDic = [];
  for (let i = 0; i < 5; i++) {
    const temp = Math.floor(Math.random() * allDic.length);

    if (
      viewDic.filter((item) => item !== temp).length ===
      viewDic.length
    ) {
      viewDic.push(temp);
    } else {
      i--;
    }
  }

  const temps = [];

  viewDic.forEach((element) => {
    temps.push(allDic[element]);
  });

  return temps;
};

const Typing = () => {
  const [dic, setDic] = useState([]);

  useEffect(() => {
    setDic(randomDic());
  }, []);

  useEffect(() => {
    if (dic.length === 0) {
      setDic(randomDic());
    }
  }, [dic]);

  return (
    <div className="container">
      <div className="viewPanel">
        {dic.map((member, idx) => (
          <div className="card" key={idx}>
            {member}
          </div>
        ))}
      </div>

      <div className="inputPanel">
        <input
          autoFocus
          type="text"
          className="inputText"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              setDic(
                dic.filter(
                  (member) => member !== e.target.value,
                ),
              );

              e.target.value = '';
            }
          }}
        ></input>
      </div>
    </div>
  );
};

export default Typing;
