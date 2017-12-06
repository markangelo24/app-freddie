let process = {
	menu:function(){
		let content = <ul><center>
			<a href='#' onClick={process.page1}><button class="button1">GUITAR FINGERSTYLE</button></a>
		</center></ul>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div><center>
		<h1>Titibo-Tibo(video link)</h1><br/>
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=tJOyMbrFA14"></iframe><br/>
<h4>1/10</h4><br/>
<h3>
OPM Song By Moira Dela torre and Fingerstyle Arrange By Ralph Jay Trumfo
</h3><br/>

				<a href='#' onClick={process.page10}><button>prev</button></a>======
				<a href='#' onClick={process.page2}><button>next</button></a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content = <div><center>
		<h1>Perfect(video link)</h1><br/>
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=xNlpXBdjuII"></iframe><br/>
<h4>2/10</h4><br/>

<h3>
Fingerstyle Tutorial of Perfect. He teach how to Arrange your Finger in every String
</h3><br/>

				<a href='#' onClick={process.page1}><button>prev</button></a>======
				<a href='#' onClick={process.page3}><button>next</button></a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page3:function(){
		let content = <div><center>
		<h1>Malaya(video link)</h1><br/>
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=G_loIreMEKc"></iframe><br/>
<h4>3/10</h4><br/>
<h3>
OPM Song By Moira Dela torre and Fingerstyle Arrange By Ralph Jay Trumfo
</h3><br/>
				<a href='#' onClick={process.page2}><button>prev</button></a>======
				<a href='#' onClick={process.page4}><button>next</button></a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page4:function(){
		let content = <div><center>
		<h1>Tadhana(video link)</h1><br/>
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=-eGQwL-9obo"></iframe><br/>
<h4>4/10</h4><br/>
<h3>
Fingerstyle cover of Tadhana
</h3><br/>
				<a href='#' onClick={process.page3}><button>prev</button></a>======
				<a href='#' onClick={process.page5}><button>next</button></a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page5:function(){
		let content = <div><center>
		<h1>Heaven(video link)</h1><br/>
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=9TqEW73Dcrg"></iframe><br/>
<h4>5/10</h4><br/>
<h3>
Fingerstyle cover of Heaven
</h3><br/>
				<a href='#' onClick={process.page4}><button>prev</button></a>======
				<a href='#' onClick={process.page6}><button>next</button></a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page6:function(){
		let content = <div><center>
		<h1>Say you Wont Let Go(video link)</h1><br/>
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=nxwvmzRS7KQ"></iframe><br/>
<h4>6/10</h4><br/>
<h3>
Fingerstyle Cover of Say You Wont Let Go
</h3><br/>
				<a href='#' onClick={process.page5}><button>prev</button></a>======
				<a href='#' onClick={process.page7}><button>next</button></a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page7:function(){
		let content = <div><center>
		<h1>Sayo(video link)</h1><br/>
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=o4Kf0WEsRys"></iframe><br/>
<h4>7/10</h4><br/>
<h3>
Fingerstyle Tutorial of Sayo. He teach how to Arrange your Finger in every String
</h3><br/>
				<a href='#' onClick={process.page6}><button>prev</button></a>======
				<a href='#' onClick={process.page8}><button>next</button></a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page8:function(){
		let content = <div><center>
		<h1>Beautiful In White(video link)</h1><br/>
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=ZPOsDcRkZGo"></iframe><br/>
<h4>8/10</h4><br/>
<h3>
Fingerstyle Cover of Beautiful in White
</h3><br/>
				<a href='#' onClick={process.page7}><button>prev</button></a>======
				<a href='#' onClick={process.page9}><button>next</button></a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page9:function(){
		let content = <div><center>
		<h1>Forevermore(video link)</h1><br/>
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=g141FGl6BjQ"></iframe><br/>
<h4>9/10</h4><br/>
<h3>
Fingerstyle Cover of Forevermore
</h3><br/>
				<a href='#' onClick={process.page8}><button>prev</button></a>======
				<a href='#' onClick={process.page10}><button>next</button></a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page10:function(){
		let content = <div><center>
		<h1>Till I Met You(video link)</h1><br/>
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=o46vbwnrdsk"></iframe><br/>
<h4>10/10</h4><br/>
<h3>
Fingerstyle Cover of Till I Met You
</h3><br/>
				<a href='#' onClick={process.page10}><button>prev</button></a>======
				<a href='#' onClick={process.page1}><button>next</button></a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	loading:function(){
		let content = <div><center>
					<font color="red"><h1>nosebleeding......</h1></font>
				</center></div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},5000);