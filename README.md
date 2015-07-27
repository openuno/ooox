# ooox
<div id="supercontainer" style="width:70%%;margin-left:15%">
Javascript engine for xml transformation. - <a href="http://www.tipozerozero.com/ooox/" target="_blank">see this project live</a><br/><br/>

- Template references are available <a href="http://www.tipozerozero.com/ooox/index.htm">here</a><br/><br/>
  FYI:While MUCH simpler examples are available there, for generating the documentation, <a href="http://www.tipozerozero.com/ooox/template-references.xml">this is the doc DATA</a>, and <a href="http://www.tipozerozero.com/ooox/template-doc-node.xml">this is't template</a>.
   
- The majority of samples, full featured use case, important renamings,... are not done yet - check back in september 2015.<br/>
- What follows is a draft
#What you need to know
-xpath
-xml||html

#Considerations
This project never make any use of XSLT, however it has a lot in common.
I've always thought really great about xml data being transformed.

More than being transoformed into another xml document I'd be interested in transoforming it to any string (that is very close to an xml document), but also to "the browser", meaning some way of having an execution flow, possibly many way.

I must praise w3c for being reccomending xslt since 1999, however I find xslt not as good as this system, to my needs.

There are 3 major differences from xslt. And a bonus one.

1 The xml document model templates (the syntax of writing the template is different)
2 It brings unicity of output code to it's maximum, making use of fulltext substitions that can be carefully pre-processed.
3 It has predefined hooks for execution that impact the output.In a variety of way, all pretty much coherent.

BONUS: It's majorly written for the browsers javascript, and xslt independent so usage is elementary, like:
!name.render(target,templateurl,dataurl);

I've pretty much always found I could reach the same output of some XSLT template with less template code.
In many cases much less, and of course allows me for greater options in terms of flow.

It has all the common benefits of XSLT, like recusivity XPATH selection, everything, of course except being a w3c standard. The non minified code of v1 however is < 30k.




Everything you can see in this hyperfunction database webapp link! example, is transformed on the fly on the client using this engine. See more info in the homepage of the live example.


</div>
