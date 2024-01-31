/**
 * Widget template
 */

interface IWidgetProps {
  title: string;
  children: React.ReactNode;
}

const Widget = ({ title, children }: IWidgetProps) => {
  return (
    <div className="widget_box">
      <h5 className="widget_title">{title}</h5>
      {children}
    </div>
  );
};

export default Widget;
